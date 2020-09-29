<template>
    <swiper :options="swiperOption" class="swiper">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
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
        swiperOption: {} = {
            loop : true,
            effect: 'cube',
            grabCursor: false,
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
        margin-top: 30px;
        width: 100vw;
        height: 250px;

        .swiper-slide {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            background-position: center;
            border: 1px solid red;
            background-size: cover;
            color: #fff;
        }
    }
</style>