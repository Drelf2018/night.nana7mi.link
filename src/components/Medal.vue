<template>
    <div class="space-fans-medal">
        <div class="medal-box fans-medal" style="padding-left: 6px;"><img
                src="https://i0.hdslb.com/bfs/activity-plat/static/20200716/1d0c5a1b042efb59f46d4ba1286c6727/icon-guard3.png@18w_18h_1c.webp"
                alt="舰长" class="medal-flag">
            <div class="medal-true-love">
                <div class="tiny">脆鲨</div>
            </div>
            <div class="medal-level" style="border-color: rgb(103, 232, 255); color: rgb(6, 21, 76);">
                <div class="tiny">
                    27
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Medal',
  props: {}
}
</script>

<style>
.space-fans-medal {
    display: inline-block;
    /* vertical-align: middle; */
    margin-left: 5px;
}

.fans-medal {
    display: flex;
    cursor: pointer;
}

.medal-box {
    position: relative;
    vertical-align: middle;
    margin-left: 3px;
    height: 16px;
    line-height: 10px;
    display: -ms-inline-flexbox;
    display: inline-flex;
    font-size: 8px;
    color: #f25d8e;
    border-radius: 1px;
}

.medal-flag {
    position: absolute;
    transform: translate(-50%,-1px);
    width: 18px;
    height: 18px;
}

.medal-true-love {
    border: 0.5px solid #f25d8e;
    text-align: center;
    box-sizing: content-box;
    border-right-width: 0;
    border-bottom-left-radius: 1px;
    border-top-left-radius: 1px;
    padding-left: 2px;
    padding-right: 2px;
    white-space: nowrap;
    width: 22px;
    padding-left: 8px;
    border-color: rgb(103, 232, 255);
    color: rgb(255, 255, 255);
    background-image: linear-gradient(90deg, rgb(6, 21, 76), rgb(104, 136, 241));
}

.medal-level {
    border: 0.5px solid #f25d8e;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    border-bottom-right-radius: 1px;
    border-top-right-radius: 1px;
    width: 18px;
    background: #fff;
}

.tiny {
    transform: scale(.5);
    width: 200%;
    height: 200%;
    font-weight: 400;
    transform-origin: left 30%;
    font-size: 20px;
}
</style>