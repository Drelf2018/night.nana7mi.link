Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

import { createApp } from 'vue'
import VueCookies from "vue-cookies";
import App from './App.vue'
import Main from './components/MainVue.vue'
import './index.css'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Main },
        { path: '/:roomid', component: Main }
    ]
})

var app = createApp(App)

app.use(router)
app.use(VueCookies)

app.config.globalProperties.getCookies = () => {
    return {
        DedeUserID: localStorage.getItem('DedeUserID') || 0,
        SESSDATA: localStorage.getItem('SESSDATA') || 0,
        bili_jct: localStorage.getItem('bili_jct') || 0
    }
}

app.config.globalProperties.setCookies = (cookies) => {
    for (var key in cookies) localStorage.setItem(key, cookies[key]);
}

app.config.globalProperties.throttle = function (fn, delay = 500) {
    var flag = new Date().getTime();
    return function (...args) {
        var tt = new Date().getTime();
        if (tt - flag >= delay) {
            fn.call(this, ...args);
            flag = tt;
        }
    }
}

app.config.globalProperties.debounce = function (fn, delay = 500) {
    var timer = null;
    return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => fn.call(this, ...args), delay);
    }
}

app.mount('#app')
