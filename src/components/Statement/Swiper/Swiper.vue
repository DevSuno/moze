<template>
    <swiper :autoUpdate="false" :options="swiperOption"

            class="swiper">
        <swiper-slide>
            <SwiperItem>0</SwiperItem>
        </swiper-slide>
        <swiper-slide>
            <SwiperItem>1</SwiperItem>
        </swiper-slide>
        <swiper-slide>
            <SwiperItem>2</SwiperItem>
        </swiper-slide>
        <swiper-slide>
            <SwiperItem>3</SwiperItem>
        </swiper-slide>

    </swiper>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
    import 'swiper/swiper-bundle.css';
    import SwiperItem from '@/components/Statement/Swiper/SwiperItem.vue';

    @Component({
        components: {
            SwiperItem,
            Swiper,
            SwiperSlide
        },
    })
    export default class Swiperwrap extends Vue {
        /*        name: 'swiper-example-3d-cube'*/


        swiperOption: {} = {
            initialSlide: 0,
            effect: 'cube',
            loop: true,
            grabCursor: true,
            cubeEffect: {
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94
            },
        };
    }
</script>


<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";


    .swiper {
        width: 300px;
        height: 300px;
        position: absolute;
        background: #9fd26a;
        top:200px;
        .swiper-slide {
            display: flex;
            justify-content: center;
            height: 400px;
            align-items: center;
            text-align: center;
            background-color:#fff;
            background-position: center;
            background-size: cover;
            color: #fff;
        }
    }
</style>