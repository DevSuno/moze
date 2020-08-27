<template>
        <swiper :options="swiperOption" class="swiper">
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
            <swiper-slide>Slide 4</swiper-slide>
            <swiper-slide>Slide 5</swiper-slide>
            <swiper-slide>Slide 6</swiper-slide>
            <swiper-slide>Slide 7</swiper-slide>
        </swiper>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
    import 'swiper/swiper-bundle.css';

    @Component({
        components: {
            Swiper,
            SwiperSlide
        },
    })
    export default class Swiper2 extends Vue {
        /*        name: 'swiper-example-3d-cube'*/

        swiperOption: {} = {
            effect: 'cube',
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


    .swiper {
        width: 300px !important;
        height: 200px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -150px;
        margin-top: -150px;

        .swiper-slide {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            font-weight: bold;
            font-size: 12px * 2;
            background-color: #2C8DFB;
            background-position: center;
            background-size: cover;
            color: #fff;
        }
    }
</style>