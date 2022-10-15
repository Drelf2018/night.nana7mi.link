<template>
  <a id="top"></a>
  <Nav href='https://t.bilibili.com/682043379459031137'
    src="https://i0.hdslb.com/bfs/new_dyn/0de10012b4a96d7d4bcd82728f77b2051464240042.png" :move="move">
  </Nav>
  <div class="view">
    <Sider id="sider" :status="siderStatus" :changeUID="changeUID"></Sider>
    <div class="subsider" :style="'right: ' + (1-siderStatus) * 10 + '%'">
      <Swiper speed=5000 width="90%" :banner="banner"></Swiper>
      <iframe src="http://music.163.com/outchain/player?type=0&amp;id=7690347404&amp;auto=1&amp;height=430" width="95%" height="450" frameborder="no" marginwidth="0" marginheight="6"></iframe>
      <div style="width: 90%" >
        <a href="/hehe.png"><img src="hehe.png" style="width: 100%"></a>
      </div>
    </div>
    <div id="main" :style="'left: ' + (siderStatus-1) * 10 + '%;'">
      <div style="display: flex;margin-top: 1em;justify-content: space-between;flex-direction: column;">
        <div :class="[bili.mid > 0 ? 'open' : 'close', 'show-block']" style="padding: 0px">
          <img :src="bili.top_photo.replace('http://', 'https://')" class="topPhoto">
          <div class="linear"></div>
          <div v-if="bili.face" style="width: 100px;position: relative;top:-2.5em;z-index: 3;margin: 0.5em">
            <img :src="bili.face.replace('http://', 'https://')"
              :class="[bili.pendant.image ? 'face1' : 'face2', 'bface']" alt>
            <img :src="bili.pendant.image.replace('http://', 'https://')" style="height: 92px; position: absolute;" alt>
          </div>
          <div id="name">
            <strong>
              <p
                :style="'color: ' + bili.vip.nickname_color + '; font-size: 150%;margin:0; display: flex; align-items: center;'">
                {{ bili.name }}
                <Medal v-if="bili.fans_medal.medal" :medal="bili.fans_medal.medal"></Medal>
              </p>
              <span style="color: grey; font-size: 100%" id="subtitle">{{ location }}</span>
            </strong>
          </div>
        </div>
        <h2>ToDo List:</h2>
        <p>1. Dynamic Island</p>
        <p>2. Main Function</p>
        <p>3. Left Sider</p>
        <div :class="[bili.mid == 0 ? 'open' : 'close', 'show-block']" style="width: min-content;">
          <center>
            <h3 style="margin: 0 auto 0.5em;">扫描二维码登录</h3>
            <img :v-show="oauthKey" class="Erweima"
              :src="'https://api.qrserver.com/v1/create-qr-code?data=https://passport.bilibili.com/qrcode/h5/login?oauthKey=' + oauthKey">
            <h4 style="margin: 0.5em auto 0;">请使用<span style="color: rgb(21,169,217)">哔哩哔哩客户端</span></h4>
          </center>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';
import Sider from './components/Sider.vue';
import Medal from './components/Medal.vue';
import Swiper from './components/Swiper.vue';

export default {
  name: 'App',
  components: {
    Nav,
    Sider,
    Medal,
    Swiper
  },
  mounted() {
    if (!this.getInfo()) {
      this.getLoginUrl();
      this.bili.mid = 0;
      this.plan = setInterval(this.getLoginInfo, 3000);
    }
  },
  data() {
    return {
      oauthKey: null,
      siderStatus: 0,
      location: returnIpData.data.location,
      changeUID: this.debounce(this.getInfo),
      move: this.throttle(() => this.siderStatus ^= 1),
      cookies: {
        DedeUserID: this.$cookies.get('DedeUserID'),
        SESSDATA: this.$cookies.get('SESSDATA'),
        bili_jct: this.$cookies.get('bili_jct')
      },
      bili: {
        mid: -1,
        face: "",
        pendant: { image: "" },
        vip: { nickname_color: "" },
        name: "",
        top_photo: "",
        fans_medal: { medal: "" }
      }
    }
  },
  computed: {
    banner() {
      function Banner(link, url) {
        this.link = link;
        this.url = url;
      };
      var res = [
        new Banner(
          "https://www.bilibili.com/video/BV1vJ411B7ng",
          "https://i2.hdslb.com/bfs/archive/7fe8272ef4c90d07ba2dba968638392f8d5bf490.jpg"
        ),    
        new Banner(
          "https://www.bilibili.com/video/BV1he4y1r79x",
          "https://i1.hdslb.com/bfs/archive/ca796b3fe2a213c652ebb32469d81511036c7117.jpg"
        ),
        new Banner(
          "https://www.bilibili.com/video/BV1tG411g7Fo",
          "https://i0.hdslb.com/bfs/archive/b7868c38077aaa66e233499723a4d7490804f861.png"
        ),
        new Banner(
          "https://www.bilibili.com/video/BV1T24y1R7wd",
          "https://i1.hdslb.com/bfs/archive/ab9738d7aee96044183b61c7dd9c95eb1ec17ed1.jpg"
        ),
        new Banner(
          "https://www.bilibili.com/video/BV1pR4y1W7M7",
          "https://i0.hdslb.com/bfs/new_dyn/8b90b7582c6fa3023eda3ffb58bf8eeb1464240042.png"
        ),
        new Banner("", "https://i0.hdslb.com/bfs/new_dyn/3c611630235bca6cc7eadca431573c1f1464240042.png")
      ];
      res.push(res[0]);
      return res;
    }
  },
  methods: {
    getInfo(event = null) {
      if (!this.cookies.DedeUserID) return false;
      if (event) this.cookies.DedeUserID = event.target.value;
      axios
        .get('https://aliyun.nana7mi.link/info', { params: this.cookies })
        .then(response => { if (response.data.mid != -1) this.bili = response.data })
        .catch(error => console.log(error));
      return true
    },
    getLoginUrl() {
      axios
        .get('https://aliyun.nana7mi.link/getLoginUrl')
        .then(response => this.oauthKey = response.data.data.oauthKey)
        .catch(error => console.log(error));
    },
    getLoginInfo() {
      axios
        .get('https://aliyun.nana7mi.link/getLoginInfo', { params: { oauthKey: this.oauthKey } })
        .then(response => {
          if (response.data.DedeUserID != -1) {
            this.cookies = response.data;
            this.$cookies.set('DedeUserID', this.cookies.DedeUserID);
            this.$cookies.set('SESSDATA', this.cookies.SESSDATA);
            this.$cookies.set('bili_jct', this.cookies.bili_jct);
            clearInterval(this.plan);
            this.getInfo();
          }
        })
        .catch(error => console.log(error));
    }
  }
}
</script>

<style>
.view {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.topPhoto {
  width: 100%;
  border-radius: 5px 5px 0 0;
  display: block;
  z-index: 1;
}

.linear {
  position: relative;
  height: 50px;
  z-index: 2;
  margin-top: -50px;
  background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))
}

#title {
  margin-top: 1.44px;
  display: inline-block;
}

#subtitle {
  display: inline-block;
  font-size: 1em;
  color: grey;
}

#main {
  position: relative;
  width: 55%;
  margin: 0px auto;
  transition: all 0.5s;
}

.subsider {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 1px solid rgb(216, 222, 228);
  padding-top: 1em;
  width: 20%;
  float: right;
  position: relative;
  transition: all 0.5s;
}

@media screen and (max-width: 900px) {
  #main {
    left: 0% !important;
    width: 75%;
  }

  .subsider {
    display: none;
  }
}

.show-block {
  position: relative;
  padding: 1em;
  margin-bottom: 1em;
  border-radius: 5px;
  background-color: #FFF;
  box-shadow: 0 3px 1px -2px rgb(0 0 0 / 12%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 20%);
  transition: all 0.75s;
}

.Erweima {
  width: 150px;
  padding: 0.5em;
  border-radius: 0.5em;
  border: 1px solid rgb(222, 222, 222);
}

.close {
  /* left: 100%; */
  opacity: 0;
}

.open {
  /* left: 0%; */
  opacity: 1;
}

input {
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 2.5em;
  font-size: 1em;
  font-weight: 540;
  padding: 1px 0 0 0.5em;
  margin: 0 auto;
  border: 1px solid #ced4da;
  border-radius: 0.5em;
  transition: all 0.2s;
}

input:focus {
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
}

.bface {
  position: absolute;
  border-radius: 50%;
}

.face1 {
  height: 52px;
  margin: 20px;
}

.face2 {
  height: 70px;
  margin: 11px;
  outline-style: solid;
  outline-color: #FB7299;
  outline-width: 3px;
}

#name {
  position: relative;
  left: 92px;
  width: calc(100% - 92px - 1.5em);
  margin: -0.5em 0.5em 0.5em 1em;
}
</style>