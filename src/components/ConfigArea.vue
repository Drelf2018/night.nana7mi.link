<template>
    <div :id="'outside' + cid" class="show-block outside">
        <div id="config-title" class="inputarea" style="display:flex;align-items: center;">
            <div class="inputInside" style="margin-top: 0 !important;align-items: center;" @click="() => status ^= 1">
                <ion-icon id="play" name="play-sharp" :style="status ? 'transform: rotate(90deg);' : ''"></ion-icon>
                <span style="width:100%;margin-right: 0.5em;">
                    {{ this.config.name }}
                    <span style="color: grey;font-size: 0.8em">所有者：{{ name }}</span>
                </span>
            </div>
            <div id="config-subtitle">
                <span style="width:20%;margin-right: 0.5em;">直播间号</span>
                <div style="width:80%;display: flex;justify-content: space-between">
                    <input v-model="roomid" style="width:calc(100% - 90px);margin: 0 0.5em 0 0;" placeholder="不是UID！！！" :disabled="running == 1">
                    <div v-if="running == 1" @click="update()"
                        style="border-radius: 0.5em;height: 38px;width:78px;border: 1px solid #ced4da;display: flex;align-items: center;">
                        <ion-icon name="stop"
                            style="margin: 0.5em 0.4em 0.5em 0.5em; width:30%; height:60%;color:rgb(232,64,38)">
                        </ion-icon>
                        <span style="color: rgb(33,37,41)">停止</span>
                    </div>
                    <IconBtn 
                        v-if="running == -1"
                        @click="if(roomid) update();"
                        name="checkmark-circle"
                        bgColor="rgb(52,120,246)"
                        iconColor="white"
                        textColor="white"
                        shadow="none">
                    启动</IconBtn>
                </div>
            </div>
        </div>
        <div :style="[status ? 'opacity: 1;' : 'opacity: 0;', 'transition: all 0.2s ease 0.1s;']">
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
            <div v-if="status && cid && !$route.params.roomid" class="inputarea">
                <div class="inputInside" style="align-items: center;">
                    <span style="width:20%;margin-right: 0.5em;">上传配置</span>
                    <IconBtn name="cloud-upload-outline" iconColor="rgb(52,120,246)" @click="() => uploadConfigs()">将此配置上传并署您用户名</IconBtn>
                </div>
                <div class="inputInside" style="align-items: center;">
                    <span style="width:20%;margin-right: 0.5em;">删除配置</span>
                    <IconBtn name="trash-outline" iconColor="rgb(232,64,38)" @click="() => deleteConfig(this.cid)">将此配置从您的账户中删除</IconBtn>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import IconBtn from './IconBtn.vue';

import axios from 'axios'

export default {
    name: "ConfigArea",
    props: {
        name: String,
        oconfig: Object,
        appendConfig: Function,
        deleteConfig: Function
    },
    components: { IconBtn },
    data() {
        return {
            config: this.oconfig,
            cid: this.oconfig.cid,
            status: 1,
            roomid: this.oconfig.roomid || this.$route.params.roomid,
            running: this.oconfig.running || -1,
            height: [0, 0],
            cookies: this.getCookies(),
            outside: null
        };
    },
    methods: {
        update() {
            this.running *= -1;
            axios
                .post("https://gh.nana7mi.link/update", {
                    roomid: String(this.running * this.roomid),
                    name: this.config.name,
                    owner: this.config.owner,
                    SESSDATA: this.cookies.SESSDATA,
                    bili_jct: this.cookies.bili_jct,
                    DedeUserID: this.cookies.DedeUserID,
                    listening_words: this.config.listening_words,
                    send_words: this.config.send_words,
                    limited_density: this.config.limited_density,
                    send_rate: this.config.send_rate
                })
                .catch(console.log)
        },
        uploadConfigs() {
            axios
                .post('https://gh.nana7mi.link/save', {
                    name: this.config.name,
                    DedeUserID: this.cookies.DedeUserID,
                    listening_words: this.config.listening_words,
                    send_words: this.config.send_words,
                    limited_density: this.config.limited_density,
                    send_rate: this.config.send_rate
                })
                .then(response => { if (response.data.code == 1) this.appendConfig(response.data.cid.toString()) })
                .catch(console.log)
        },
    },
    mounted() {
        this.outside = document.getElementById("outside" + this.cid);
        this.height[this.status] = this.outside.offsetHeight - 32;
        this.status ^= 1;
        setTimeout(() => {
            this.height[this.status] = this.outside.offsetHeight - 32;
            this.outside.style = "height: " + this.height[this.status] + "px;";
            if(this.$route.params.roomid) {
                this.outside.classList.add("iframe");
                document.body.style.backgroundColor = "transparent"
                document.body.parentElement.style.filter = "none"
                this.status = 1
            }
        }, 1)
    },
    watch: { "status": function (val) { if(this.height[val])this.outside.style = "height: " + this.height[val] + "px;"; } },
}
</script>

<style>
.iframe {
    margin: 3px;
}

.outside {
    display: flex;
    flex-direction: column;
    transition: height 0.3s, opacity 0.75s !important;
    overflow-y: hidden;
}

#play {
    transition: all 0.3s;
    font-size: 1.25em;
    margin-right: 0.2em;
}

.inputarea {
    display: flex;
    justify-content: space-between;
    /* transition: opacity 0.3s ease 0; */
}

.inputInside {
    display: flex;
    width: 48%;
    margin-top: 0.5em;
}

#config-subtitle {
    display: flex;
    width: 48%;
    align-items: center;
}

@media screen and (max-width: 900px) {
    .inputarea {
        flex-direction: column;
    }

    #config-title {
        align-items: flex-start !important;
    }

    .inputInside {
        width: auto;
    }

    #config-subtitle {
        width: 100%;
        margin-top: 0.5em;
    }
}
</style>