<template>
    <div :class="[status ? 'sider-open' : 'sider-close' ,'hidden-sider']">
        <div style="overflow: auto; height: 100%">
            <div class="content">
                <h2 style="margin-top: 0.7em; margin-bottom: 0.3em">本页面</h2>
                <div style="display: flex;justify-content: space-between; margin-bottom: 1.75em;">
                    <IconTag
                        href="https://github.com/Drelf2018/night.nana7mi.link"
                        src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
                        title="前端"
                        subtitle="Vue 3"
                        style="width: 48%">
                    </IconTag>
                    <IconTag
                        href="https://github.com/Drelf2018/api"
                        src="https://www.aliyun.com/favicon.ico"
                        title="后端"
                        subtitle="Aliyun"
                        style="width: 48%">
                    </IconTag>
                </div>
            </div>

            <div class="content">
                <h2 style="margin-top: 0.7em; margin-bottom: 0.3em">UI 灵感</h2>
                <div style="display: flex;justify-content: space-between; margin-bottom: 1.75em;">
                    <IconTag
                        href="https://github.com/AceDroidX/SuperSpider"
                        src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
                        title="BiliSC"
                        subtitle="Vue 3"
                        style="width: 48%;">
                    </IconTag>
                    <IconTag
                        href="https://github.com/brainbush/matsuri.icu"
                        src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
                        title="matsuri"
                        subtitle="Vue 3"
                        style="width: 48%;">
                    </IconTag>
                </div>
            </div>

            <div class="content">
                <h2 style="margin-top: 0.7em; margin-bottom: 0.3em">关于</h2>
                <input @input="func" style="margin: 1em 0px;" placeholder="你想知道什么？">
            </div>
        </div>
    </div>
</template>

<script>
import IconTag from './IconTag.vue';

export default {
    name: "SiderVue",
    props: {
        status: Number,
        func: Function
    },
    components: { IconTag }
}
</script>

<style>
.sider-open {
    left: 0%;
}

.sider-close {
    left: -20%;
}

.hidden-sider {
    top: 56px;
    width: 20%;
    height: calc(200vh - 56px);
    position: fixed;
    transition: all 0.5s;
    background-color: #FFF;
    border-right: 1px solid rgb(216, 222, 228);
    z-index: 5;
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

</style>
