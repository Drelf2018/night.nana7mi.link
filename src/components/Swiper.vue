<template>
    <div id="swiperBox" @mouseenter="stop" @mouseleave="start" :style="{'width': width, 'height': '172px'}">
        <div class="hidden">
            <div id="swiper">
                <div class="imgDiv" v-for="obj in banner">
                    <a :href="obj.link">
                        <img class="swiper-width" :src="obj.url">
                        <img class="swiper-height" :src="obj.url">
                    </a>
                </div>
            </div>
        </div>
        <div class="dotList">
            <div class="dot" v-for="i in banner.length - 1" :style="count == i-1 ? 'opacity: 1;' : 'opacity: 0.5;'"></div>
        </div>
        <ion-icon name="chevron-back-circle" class="btn" style="left: 10px" @click="move(-1)"></ion-icon>
        <ion-icon name="chevron-forward-circle" class="btn" style="right: 10px" @click="move(1)"></ion-icon>
    </div>
</template>

<script>
export default {
    name: 'Swiper',
    props: {
        speed: String,
        width: String,
        banner: null
    },
    data() {
        return {
            timer: null,
            count: 0,
            swiper: null,
            move: this.throttle(this.moveNow, 550)
        }
    },
    updated() {
        // this.updateStyle();
    },
    methods: {
        updateStyle() {
            this.total = this.banner.length;
            this.swiper.style.width = this.total + '00%';
            var maxAlpha = 0;
            this.banner.forEach(
                obj => {
                    var currentImg = new Image();
                    currentImg.src = obj.url;
                    setTimeout(() => {
                        var alpha = currentImg.height / currentImg.width;
                        if(alpha > maxAlpha) maxAlpha = alpha;
                    }, 100);
                }
            )
            setTimeout(() => {
                if (maxAlpha)
                    document.getElementById('swiperBox').style.height = maxAlpha * parseInt(this.width) + 'px';
            }, 1);
        },
        stop() {
            if (this.timer) {
                clearInterval(this.timer);
                this.timer = null;
            }
        },
        start() {
            var that = this;
            function autoScroll() {
                that.count += 1;
                that.swiper.style.transition = "all 0.5s";
                that.swiper.style.left = -100 * that.count + '%';
                if (that.count >= that.total - 1)
                    setTimeout(() => {
                        that.swiper.style.transition = "none";
                        that.swiper.style.left = '0%';
                        that.count = 0;
                    }, 505);
            }
            this.timer = setInterval(autoScroll, parseInt(this.speed));
        },
        moveNow(fro) {
            this.stop();
            if (this.swiper.style.left) {
                this.count = parseInt(this.swiper.style.left)/-100 + fro;
            } else {
                this.count = fro;
            }
            if (this.count >= this.total - 1) {
                this.count = 0;
                this.swiper.style.left = -100 * (this.total - 1) + '%';
                setTimeout(() => {
                    this.swiper.style.transition = "none";
                    this.swiper.style.left = '0%';
                    setTimeout(() => {
                        this.swiper.style.transition = "all 0.5s";
                    }, 30);
                }, 510);
            }
            else if (this.count < 0) {
                this.count = this.total - 2;
                this.swiper.style.transition = "none";
                this.swiper.style.left = -100 * (this.total - 1) + '%';
                setTimeout(() => {
                    this.swiper.style.transition = "all 0.5s";
                    this.swiper.style.left = -100 * this.count + '%';
                }, 30);
            }
            else this.swiper.style.left = -100 * this.count + '%';
        }
    },
    mounted() {
        this.swiper = document.getElementById('swiper');
        this.updateStyle();
        this.start();
    },
    beforeDestroy() {
        this.stop();
    }
}
</script>

<style>
#swiperBox {
    position: relative;
    border-radius: 10px;
    z-index: 1;
    margin-bottom: 6px;
    box-shadow: 0 5px 10px #ccc;
}

.btn {
    color: #F5F5F7;
    font-size: 40px;
    height: 20%;
    top: 40%;
    position: absolute;
    cursor: pointer;
    transition: all 0.3s;
    opacity: 0;
}

#swiperBox:hover .btn {
    opacity: 1;
}

.hidden {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 10px;
}

#swiper {
    left: 0%;
    position: relative;
    height: 100%;
    display: flex;
    transition: all 0.5s;
}

.imgDiv {
    width: 100%;
    height: 100%;
    position: relative;
    overflow:hidden;
}

img.swiper-width {
    width: 100%;
    height: 105%;
    position: absolute;
    filter: blur(5px);
    opacity: 0.5;
}

img.swiper-height {
    height: 100%;
    left: 0;
    right: 0;
    position: absolute;
    margin: auto;
}

.dotList {
    position: absolute;
    display:flex;
    bottom: 0.5em;
    right: 0.6em;
    opacity: 0.75;
    transition: all 0.3s;
}

#swiperBox:hover .dotList {
    opacity: 1;
}

.dot {
    background-color: white;
    width:1em;
    height:1em;
    border-radius: 0.5em;
    margin-left: 0.5em;
    transition: all 0.3s;
    box-shadow: 0 2px 3px grey;
}
</style>
