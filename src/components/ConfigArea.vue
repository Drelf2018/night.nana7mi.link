<template>
    <div style="display: flex;flex-direction: column;">
        <div :style="[status ? 'margin-bottom: 0.5em;' :'', 'display:flex;align-items: center;']">
            <ion-icon id="play" name="play-sharp" @click="status ^= 1" :style="status ? 'transform: rotate(90deg);' : ''"></ion-icon>
            <span style="width:50%;margin-right: 0.5em;">晚安姬配置</span>
            <input v-model="roomid" style="width:30%;" placeholder="直播间号">
            <div v-if="running == 1" @click="update()" style="border-radius: 0.5em;height: 38px;width:78px;border: 1px solid #ced4da;display: flex;align-items: center;">
                <ion-icon name="stop" style="margin: 0.5em 0.4em 0.5em 0.5em; width:30%; height:60%;color:rgb(232,64,38)"></ion-icon>
                <span style="color: rgb(33,37,41)">停止</span>
            </div>
            <div v-if="running == -1" @click="if(roomid) update();" style="border-radius: 0.5em;background-color: rgb(52,120,246);height: 40px;width:80px;display: flex;align-items: center;">
                <ion-icon name="checkmark-circle" style="margin: 0.5em 0.4em 0.5em 0.5em; width:30%; height:60%;color:white"></ion-icon>
                <span style="color: white">启动</span>
            </div>
        </div>
        <div v-if="status" class="inputarea">
            <div class="inputInside" style="align-items: center;">
                <span style="width:20%;margin-right: 0.5em;">密度阈值</span>
                <input v-model="config.limited_density" style="width:80%;">
            </div>
            <div class="inputInside" style="align-items: center;">
                <span style="width:20%;margin-right: 0.5em;">发送间隔</span>
                <input v-model="config.send_rate" style="width:80%;">
            </div>
        </div>
        <div v-if="status" class="inputarea">
            <div class="inputInside">
                <span style="width:20%;margin-right: 0.5em;">监听弹幕</span>
                <textarea v-model="config.listening_words" style="width:80%;"></textarea>
            </div>
            <div class="inputInside">
                <span style="width:20%;margin-right: 0.5em;">发送弹幕</span>
                <textarea v-model="config.send_words" style="width:80%;"></textarea>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ConfigArea',
    props: {
        config: Object,
        cookies: Object
    },
    data() {
        return {
            status: 0,
            roomid: null,
            running: -1
        }
    },
    methods: {
        update() {
            this.running *= -1
            axios
                .post('https://gh.nana7mi.link/update', {
                    roomid: String(this.running*this.roomid),
                    SESSDATA: this.cookies.SESSDATA,
                    bili_jct: this.cookies.bili_jct,
                    DedeUserID: this.cookies.DedeUserID,
                    listening_words: this.config.listening_words.split("\n"),
                    send_words: this.config.send_words.split("\n"),
                    limited_density: this.config.limited_density,
                    send_rate: this.config.send_rate
                })
                .catch(error => console.log(error));
        }
    }
}
</script>

<style>
#play {
    transition: all 0.3s;
    font-size: 1.25em;
    margin-right: 0.2em;
}

.inputarea {
  display: flex;
  justify-content: space-between;
  transition: all 0.5s ease 0.5s;
}

.inputInside {
  display: flex;
  width: 48%;
  margin-bottom: 0.5em;
}

@media screen and (max-width: 900px) {
  .inputarea {
    flex-direction: column;
  }

  .inputInside {
    width: auto;
  }
}
</style>