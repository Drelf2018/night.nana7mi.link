<template>
  <nav>
    <ion-icon class="menu" name="menu-outline" @click="move"></ion-icon>
    <!-- <a href="/"><span class="menu" style="left: 2em;top: 0.4em;">night.nana7mi.link</span></a> -->
    <a :href="href"><img class="eyes" :src="src" alt="eyes"></a>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    href: String,
    src: String,
    move: Function
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
  z-index: 3;
}

.menu {
  left: 0.5em;
  top: 0.5em;
  position: fixed;
  color: #FFF;
  font-size: 1.8em;
  z-index: 4;
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
  z-index: 6;
}
</style>