import asyncio

import yaml
from bilibili_api.live import Credential
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from uvicorn import Config, Server

from monitor import Config as MC, Monitor

app = FastAPI(title='night.nana7mi.link', description='后端接口', version="0.1.0 嗯？我还以为 1.0.1 呢")
monitor = Monitor("http://localhost:8080", "nightbot")
configs: list = yaml.load(open("configs.yml", 'r', encoding='utf-8'), Loader=yaml.Loader)
loop = asyncio.new_event_loop()
loop.create_task(monitor.run())

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/query', summary='查询配置文件', description='通过配置文件序列号获取，如果超出限制会返回 {"code": 0}')
def query(cid: int):
    if cid < 0:
        return {"code": 1, "data": configs}
    elif len(configs) > cid:
        return {"code": 1, "data": configs[cid]}
    else:
        return {"code": 0}

@app.post('/update', summary='开启监听', description='传递配置文件开启监听，无返回值')
def update(config: MC):
    credential = Credential(sessdata=config.SESSDATA, bili_jct=config.bili_jct, dedeuserid=config.DedeUserID)
    monitor.update(credential, config)

@app.post('/save', summary='保存配置文件', description='接收配置文件并保存，会检查参数是否齐全，若有错误返回 {"code": 0}')
def save(config: MC):
    try:
        configs.append({
            "listening_words": config.listening_words,
            "send_words": config.send_words,
            "limited_density": config.limited_density,
            "send_rate": config.send_rate
        })
        yaml.dump(configs, open("configs.yml", 'w', encoding='utf-8'), allow_unicode=True)
        return {"code": 1, "cid": len(configs) - 1}
    except Exception as e:
        return {"code": 0, "error": str(e), "line": e.__traceback__.tb_lineno}

ser = Server(config=Config(app, loop=loop, host="0.0.0.0", port=5770))
loop.run_until_complete(ser.serve())
