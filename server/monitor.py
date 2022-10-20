import asyncio
from json import loads
from typing import Dict, List

import httpx
from aiowebsocket.converses import AioWebSocket, Converse
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from bilibili_api.live import Credential

from nightbot import Config, NightBot


class Monitor:
    converse: Converse = None
    sched = AsyncIOScheduler(timezone='Asia/Shanghai')
    botDict: Dict[str, List[NightBot]] = dict()

    def __init__(self, BASEURL: str, aid: str):
        """连接 biligo-ws-live 的适配器"""
        self.BASEURL = BASEURL
        self.aid = aid  #  接入 biligo-ws-live 时的 id 用来区分不同监控程序
        self.url = 'wss://blive.ericlamm.xyz/ws?id='+aid # biligo-ws-live 运行地址

    def update(self, credential: Credential, config: Config):
        roomid = str(config.roomid)
        if int(roomid) > 0:
            nb = NightBot(credential, roomid, config).connect(self.sched)
            if roomid not in self.botDict:
                # 将新监听房间号告知 biligo-ws-live
                httpx.put(self.BASEURL+'/subscribe/add', headers={"Authorization": self.aid}, data={'subscribes': [roomid]})
                self.botDict[roomid] = [nb]
            else:
                self.botDict[roomid].append(nb)
        else:
            roomid = roomid[1:]
            for bot in self.botDict.get(roomid, []):
                if bot.id == f"{credential.dedeuserid}_{roomid}":
                    self.sched.remove_job(bot.id)
                    self.botDict[roomid].remove(bot)
                    if len(self.botDict[roomid]) == 0:
                        # 将移除监听房间号告知 biligo-ws-live
                        httpx.put(self.BASEURL+'/subscribe/remove', headers={"Authorization": self.aid}, data={'subscribes': [roomid]})

    def parse(self, mes: bytes):
        js = loads(mes)
        roomid = str(js['live_info']['room_id'])
        if js['command'] == 'DANMU_MSG':  # 接受到弹幕
            info = js['content']['info']
            for bot in self.botDict[roomid]:
                bot.parse(info)

    async def connect(self):
        while not self.converse:
            try:
                async with AioWebSocket(self.url) as aws:
                    self.aws = aws
                    self.converse = aws.manipulator
            except Exception:
                await asyncio.sleep(3)
        return self.converse.receive

    async def run(self):
        self.sched.start()
        recv = await self.connect()
        # 保证至少监听一个直播间让连接不中断
        httpx.put(self.BASEURL+'/subscribe/add', headers={"Authorization": self.aid}, data={'subscribes': ["14703541"]})
        while True: self.parse(await recv())  # 死循环接受消息
