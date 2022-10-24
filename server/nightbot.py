import logging
import re
from typing import List, Optional

from apscheduler.schedulers.asyncio import AsyncIOScheduler
from bilibili_api.live import Credential, Danmaku, LiveRoom
from pydantic import BaseModel


class Config(BaseModel):
    name: Optional[str]
    roomid: Optional[str]
    SESSDATA: Optional[str]
    bili_jct: Optional[str]
    DedeUserID: Optional[str]
    listening_words: str
    send_words: str
    limited_density: float
    send_rate: float


def cnm怎么正则也要转义啊(word: str) -> str:
    for 特殊字符 in '.^$*+\[]|{}()?':
        word = word.replace(特殊字符, f'\\{特殊字符}')
    return word

class NightBot:
    def __init__(self, credential: Credential, roomid: str, config: Config):
        """全自动晚安机"""
        self.danmuku_list = []  # 储存一段时间晚安弹幕
        self.count_danmuku = 0  # 储存某时间点晚安弹幕
        self.total_danmuku = 0  # 统计一段时间总晚安弹幕
        self.last_time = 0  # 上一次储存弹幕时的时间戳
        self.config = config  # 保存配置
        self.density = config.limited_density  # 监听密度

        words = ['(' + cnm怎么正则也要转义啊(word) + ')' for word in config.listening_words]
        self.regex = re.compile('|'.join(words))  # 正则监听词

        self.send_count = 0  # 发送计数器
        self.send_rate = config.send_rate  # 发送速率
        self.send_words = config.send_words  # 发送弹幕库
        self.send_room = LiveRoom(int(roomid), credential)  # 发送弹幕的直播间

        self.id = f'{credential.dedeuserid}_{roomid}'  # sched 中 id

        handler = logging.StreamHandler()
        handler.setFormatter(logging.Formatter("["+self.id+"_"+str(self.density)+"][%(asctime)s]: %(message)s", '%H:%M:%S'))
        self.logger = logging.Logger(self.id)
        self.logger.addHandler(handler)

    def connect(self, sched: AsyncIOScheduler):
        sched.add_job(self.send_msg, 'interval', id=self.id, seconds=self.send_rate)
        return self

    async def send_msg(self):
        """定时检测弹幕密度 若超过阈值则随机发送弹幕"""
        self.logger.info(self.total_danmuku)
        if self.total_danmuku >= 5*self.density:  # 密度超过 5t/s 则发送晚安
            word = self.send_words[self.send_count % len(self.send_words)]
            try:
                await self.send_room.send_danmaku(Danmaku(word))
                self.send_count += 1
            except Exception as e:
                self.logger.error(e)

    def parse(self, info: list):
        """检测弹幕并计算密度"""
        time = info[9]['ts']  # 时间戳
        if time > self.last_time:
            self.last_time = time
            self.danmuku_list.append(self.count_danmuku)  # 把上个时间戳记录的弹幕数储存并归零
            self.count_danmuku = 0
            self.total_danmuku += self.danmuku_list[-1]  # 总弹幕数增加
            if len(self.danmuku_list) > 5:  # 只记录最近 5 个时间戳内的弹幕 可改
                self.total_danmuku -= self.danmuku_list.pop(0)  # 从总弹幕数总减去 删去了的时间戳内的弹幕数
        if self.regex.search(info[1]): self.count_danmuku += 1
