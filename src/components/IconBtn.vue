<template>
    <div class="link" :style="'height: 40px;display: flex;align-items: center;background-color: ' + bgColor">
        <ion-icon :name="name" :style="'margin: 7px 5px 7px 7px; width:26px; height:26px;color:' + iconColor"></ion-icon>
        <span :style="'margin-right:10px;color: '+textColor"><slot></slot></span>
    </div>
</template>

<script>
export default {
    name: 'IconBtn',
    props: {
        name: String,
        bgColor: String,
        iconColor: String,
        textColor: String
    }
}
</script>