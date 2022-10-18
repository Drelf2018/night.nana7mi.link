import asyncio
import re
from typing import Dict, Optional

import uvicorn
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from bilibili_api.live import Credential, Danmaku, LiveDanmaku, LiveRoom
from fastapi import FastAPI, Cookie

SCHED = AsyncIOScheduler(timezone='Asia/Shanghai')  # 定时检测密度的任务调度器

def cnm怎么正则也要转义啊(word: str) -> str:
    for 特殊字符 in '.^$*+\[]|{}()?':
        word = word.replace(特殊字符, f'\\{特殊字符}')
    return word

class NightBot:
    def __init__(self, credential: Credential, roomid: str, cid: str):
        '全自动晚安机'
        data = dataDict[cid]
        self.listen_room = LiveDanmaku(int(roomid))  # 接收弹幕, debug=True
        send_room = LiveRoom(int(roomid), credential)  # 发送弹幕

        danmuku_list = []  # 储存一段时间晚安弹幕
        count_danmuku = 0  # 储存某时间点晚安弹幕
        total_danmuku = 0  # 统计一段时间总晚安弹幕
        last_time = 0  # 上一次储存弹幕时的时间戳

        words = ['(' + cnm怎么正则也要转义啊(word) + ')' for word in data['listening_words']]
        regex = re.compile('|'.join(words))  # 正则监听词
        density = data['limited_density']
        goodnight = data['goodnight_words']  # 发送弹幕库
        send_count = 0  # 发送计数器

        @self.listen_room.on('DANMU_MSG')
        async def on_danmaku(event):
            '接收弹幕并计算密度'
            nonlocal danmuku_list, count_danmuku, total_danmuku, last_time
            info = event['data']['info']
            time = info[9]['ts']  # 时间戳
            if time > last_time:
                last_time = time
                danmuku_list.append(count_danmuku)  # 把上个时间戳记录的弹幕数储存并归零
                count_danmuku = 0
                total_danmuku += danmuku_list[-1]  # 总弹幕数增加
                if len(danmuku_list) > 5:  # 只记录最近 5 个时间戳内的弹幕 可改
                    total_danmuku -= danmuku_list.pop(0)  # 从总弹幕数总减去 删去了的时间戳内的弹幕数
            if regex.search(info[1]): count_danmuku += 1

        self.sid = '_'.join([credential.dedeuserid, roomid, cid])
        @SCHED.scheduled_job('interval', id=self.sid, seconds=data['send_rate'])
        async def send_msg():
            '每 1 秒检测弹幕密度 若超过阈值则随机发送弹幕'
            nonlocal send_count
            print(send_count)
            if total_danmuku >= 5*density:  # 密度超过 5t/s 则发送晚安
                word = goodnight[send_count % len(goodnight)]
                send_count += 1
                await send_room.send_danmaku(Danmaku(word))
        
        asyncio.get_event_loop().create_task(self.listen_room.connect())
    
    async def stop(self):
        SCHED.remove_job(self.sid)
        await self.listen_room.disconnect()

dataDict = {
    "1": {
        "listening_words": [
            "晚安",
            "拜拜",
            "别走好吗"
        ],
        "goodnight_words": [
            "晚安1",
            "晚安2",
            "晚安4",
            "晚安8",
            "晚安16",
            "晚安32",
            "晚安64"
        ],
        "limited_density": 0,
        "send_rate": 1
    }
}

app = FastAPI()

botList: Dict[tuple, NightBot] = dict()

@app.get('/add_job')
async def add_job(
    roomid: str,
    cid: str,
    DedeUserID: Optional[str] = Cookie(),
    SESSDATA: Optional[str] = Cookie(),
    bili_jct: Optional[str] = Cookie()
):
    if (DedeUserID, roomid, cid) in botList: return
    credential = Credential(sessdata=SESSDATA, bili_jct=bili_jct, dedeuserid=DedeUserID)
    botList[(DedeUserID, roomid, cid)] = NightBot(credential, roomid, cid)
    return {'code': 0}

@app.get('/remove_job')
async def remove_job(roomid: str, cid: str, DedeUserID: Optional[str] = Cookie()):
    if (DedeUserID, roomid, cid) not in botList: return
    await botList[(DedeUserID, roomid, cid)].stop()
    botList[(DedeUserID, roomid, cid)] = None
    return {'code': 0}

uvicorn.run(app=app)
