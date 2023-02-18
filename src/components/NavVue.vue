<template>
  <nav>
    <ion-icon class="menu" name="menu-outline" @click="move"></ion-icon>
    <div id="island" :class="islandStatus ? 'island-open' : 'island-close'" style="width: 95px; height: 40px">
      <div id="phone">
        <div style="height: 100%;display: flex;align-items: center;">
          <ion-icon name="logo-apple" class="github"></ion-icon>
          <p style="padding-top: 0.25em;">Dynamic Island</p>
        </div>
        <IconTag
          href="https://github.com/Drelf2018/nana7mi.link/blob/main/src/components/Nav.vue"
          src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
          title="CSS"
          subtitle="Powered"
          style="padding-right: 1em">
        </IconTag>
      </div>
      <div id="content" :class="islandStatus ? 'inner-open' : 'inner-close'">
        <div class="inner"><slot></slot></div>
      </div>
    </div>
    <a :href="href"><img class="eyes" :src="src" alt="eyes"></a>
  </nav>
</template>

<script>
import IconTag from './IconTag.vue';
export default {
    name: "NavVue",
    props: {
        href: String,
        src: String,
        move: Function,
        islandStatus: Number
    },
    components: { IconTag },
    updated() {
      if (this.islandStatus) {
        var inner = document.getElementById('content').lastChild
        var w = document.body.offsetWidth >= 900 ? (Math.max(inner.offsetWidth, 450)+"px") : "95%", h = 48 + inner.offsetHeight;
        document.getElementById('island').style = 'width: ' + w + ';height: ' + h + 'px'
      } else {
        document.getElementById('island').style = 'width: 95px; height: 40px'
      }
      
    }
}
</script>

<style>
nav {
  position: sticky;
  top: 0;
  padding: 0.5em;
  background-color: rgb(33, 37, 41);
  display: flex;
  justify-content: center;
  z-index: 4;
}

.menu {
  left: 0.5em;
  top: 0.5em;
  position: fixed;
  color: #FFF;
  font-size: 1.8em;
  z-index: 5;
  transition: all 0.3s;
}

.menu:hover {
  opacity: 0.8;
}

.eyes {
  position: relative;
  height: 40px;
  display: block;
  border-radius: 7px;
  z-index: 7;
}

#phone {
  /* position: absolute; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  width: 100%;
  height: 45px;
  background-color: rgb(246, 248, 250);
  border-bottom: 3px solid rgb(33, 37, 41);
  transition: all 0.3s;
  z-index: 2;
}

#island {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  margin: 0.5em auto;
  border-radius: 20px;
  background-color: #FFF;
  overflow: hidden;
  z-index: 6;
}

.island-open {
  transition: width 0.3s ease 0s, height 0.3s ease 0.3s, box-shadow 0.3s ease 0s;
  /* width: 450px;
  height: 50%; */
  box-shadow: 0 7px 10px grey;
}

.island-close {
  transition: all 0.3s;
  /* width: 95px;
  height: 40px; */
  box-shadow: none;
}

.inner {
  position: relative;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  /* width: min-content; */
  /* height: calc(100% - 48px); */
}

.inner-open {
  transition: all 0.3s ease 0.3s;
  opacity: 1;
}

.inner-close {
  transition: all 0.3s;
  opacity: 0;
}
</style>