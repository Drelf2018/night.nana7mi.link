<template>
    <div :class="[status ? 'sider-open' : 'sider-close' ,'hidden-sider']">
        <div style="overflow: auto; height: 100%">
            <div class="content">
                <h2 style="margin-top: 0.7em; margin-bottom: 0.3em">本页面</h2>
                <div style="display: flex;justify-content: space-between; margin-bottom: 1.75em;">
                    <a href="https://github.com/Drelf2018/night.nana7mi.link" style="width: 48%">
                        <div class="link">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" class="github">
                            <div style="display: inline;">
                                <strong>前端</strong><br />
                                <span style="color: grey;">Vue 3</span>
                            </div>
                        </div>
                    </a>
                    <a href="https://github.com/Drelf2018/api" style="width: 48%">
                        <div class="link">
                            <img src="https://www.aliyun.com/favicon.ico" class="github">
                            <div style="display: inline;">
                                <strong>后端</strong><br />
                                <span style="color: grey;">Aliyun</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="content" v-for="(val, key) of repositories">
                <h2 style="margin-top: 0.7em; margin-bottom: 0.3em">{{ key }}</h2>
                <ul style="margin: 0; padding-left: 0;">
                    <li v-for="r in val">
                        <a :href="r.name ? ('https://github.com/' + r.name) : r.url">
                            <img :src="r.uid ? ('https://avatars.githubusercontent.com/u/' + r.uid + '?s=16') : r.src"
                                class="avatar">
                        </a>
                        <a class="repositories" :href="r.name ? ('https://github.com/' + r.name) : 'https://' + r.url">
                            {{ r.name ? r.name : r.url }}
                        </a>
                    </li>
                </ul>
            </div>

            <div class="content">
                <h2 style="margin-top: 0.7em; margin-bottom: 0.3em">关于</h2>
                <input @input="changeUID" style="margin: 1em 0px;" placeholder="你想知道什么？">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sider',
    props: {
        status: Number,
        changeUID: Function
    },
    data() {
        return {
            repositories: {
                'UI 抄袭自': [
                    { uid: 15519693, name: 'AceDroidX/SuperSpider' },
                    { uid: 10243794, name: 'brainbush/matsuri.icu' },
                    { uid: 22138497, name: 'vuetifyjs/vuetify' },
                ]
            }
        }
    }
}
</script>

<style>
.sider-open {
    left: 0%;
}

.sider-close {
    left: -20%;
}

.link {
    display: flex;
    transition: all 0.1s;
    border-radius: 0.5em;
    box-shadow: 0 2px 5px grey;
}

.link:hover {
    background-color: rgb(245, 245, 245);
    box-shadow: 0 1px 3px grey;
}

.github {
    width: 1em;
    margin: auto 0;
    padding: 0 0.2em;
    font-size: 1.8em;
    transition: all 0.1s;
}

.hidden-sider {
    top: 56px;
    width: 20%;
    height: calc(200vh - 56px);
    position: fixed;
    transition: all 0.5s;
    background-color: #FFF;
    border-right: 1px solid rgb(216, 222, 228);
    z-index: 4;
}

@media screen and (max-width: 900px) {
    .sider-close {
        left: -100%;
    }
    .hidden-sider {
        width: 100%;
    }
}

.content {
    width: 80%;
    margin: 0 auto;
}

li {
    list-style: none;
    display: block;
    padding-bottom: 0.5em;
}

.avatar {
    width: 16px;
    height: 16px;
    float: left;
    overflow: hidden;
    line-height: 1;
    vertical-align: middle;
    flex-shrink: 0;
    box-shadow: 0 0 0 1px grey;
    border-radius: 50%;
    margin: 0 0.5em 0.5em 0;
}

.repositories {
    color: #24292f;
}

.repositories:hover {
    text-decoration: underline;
}
</style>
