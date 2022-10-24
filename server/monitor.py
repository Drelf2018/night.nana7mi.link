import asyncio
import logging
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

    def __init__(self, baseurl: str, aid: str):
        """连接 biligo-ws-live 的适配器"""
        self.baseurl = baseurl
        self.aid = aid  #  接入 biligo-ws-live 时的 id 用来区分不同监控程序
        self.url = f'{baseurl}/ws?id={aid}' # biligo-ws-live 运行地址

        handler = logging.StreamHandler()
        handler.setFormatter(logging.Formatter("[Server][%(asctime)s]%(message)s", '%H:%M:%S'))
        self.logger = logging.Logger("Server")
        self.logger.addHandler(handler)

    def update(self, credential: Credential, config: Config):
        roomid = str(config.roomid)
        if int(roomid) > 0:
            if roomid not in self.botDict:
                # 将新监听房间号告知 biligo-ws-live
                httpx.put(self.baseurl+'/subscribe/add', headers={"Authorization": self.aid}, data={'subscribes': [roomid]})
                self.botDict[roomid] = [NightBot(credential, roomid, config).connect(self.sched)]
            else:
                bot_id = f"{credential.dedeuserid}_{roomid}"
                for bot in self.botDict[roomid]:
                    if bot.id == bot_id:
                        break
                else:
                    self.botDict[roomid].append(NightBot(credential, roomid, config).connect(self.sched))
        else:
            roomid = roomid[1:]
            bot_id = f"{credential.dedeuserid}_{roomid}"
            for bot in self.botDict.get(roomid, []):
                if bot.id == bot_id:
                    self.sched.remove_job(bot.id)
                    self.botDict[roomid].remove(bot)
                    if len(self.botDict[roomid]) == 0 and roomid != "21452505":
                        # 将移除监听房间号告知 biligo-ws-live
                        httpx.put(self.baseurl+'/subscribe/remove', headers={"Authorization": self.aid}, data={'subscribes': [roomid]})

    def parse(self, mes: bytes):
        js = loads(mes)
        roomid = str(js['live_info']['room_id'])
        if js['command'] == 'DANMU_MSG':  # 接受到弹幕
            info = js['content']['info']
            self.logger.info(f"[{roomid}] {info[2][1]}: {info[1]}")
            for bot in self.botDict.get(roomid, []):
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

    def getByUid(self, uid: str):
        tempList = list()
        for botList in self.botDict.values():
            for bot in botList:
                if bot.id.startswith(f"{uid}_"):
                    tempList.append(bot.config.dict())
        return tempList

    async def run(self):
        self.sched.start()
        recv = await self.connect()
        # 保证至少监听一个直播间让连接不中断
        httpx.post(self.baseurl+'/subscribe', headers={"Authorization": self.aid}, data={'subscribes': ["21452505"]})
        while True: self.parse(await recv())  # 死循环接受消息
