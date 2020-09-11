<template>
    <swiper :autoUpdate="false" :options="swiperOption"
            @slideChangeTransitionEnd="slideChangeTransitionEnd"
            class="swiper">
        <swiper-slide>
            <SwiperItem :date="pages[0]"></SwiperItem>
        </swiper-slide>
        <swiper-slide>
            <SwiperItem :date="pages[1]"></SwiperItem>
        </swiper-slide>
        <swiper-slide>
            <SwiperItem :date="pages[2]"></SwiperItem>
        </swiper-slide>

    </swiper>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component, } from 'vue-property-decorator';
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
    import 'swiper/swiper-bundle.css';
    import SwiperItem from '@/components/Record/Calendar/SwiperItem.vue';
    import helper from '@/components/Record/Calendar/helper';

    @Component({
        components: {
            SwiperItem,
            Swiper,
            SwiperSlide
        },
    })
    export default class Swiperwrap extends Vue {
        /*        name: 'swiper-example-3d-cube'*/

        date: { year: number; month: number; day: number } = helper.getNewDate(new Date());
        pages: [{year: number;month: number;day: number},{year: number;month: number;day: number},{year: number;month: number;day: number}]= [

            {
                year:this.date.year,
                month: this.date.month - 1,
                day:this.date.day
            },
            {
                year: this.date.year,
                month: this.date.month,
                day:this.date.day
            },
            {
                year: this.date.year,
                month: this.date.month + 1,
                day:this.date.day
            }

        ];
        swiperOption: {} = {
            initialSlide: 1,
            effect: 'cube',
            loop: false,
            grabCursor: true,
            cubeEffect: {
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94
            },
        };


        slideChangeTransitionEnd(swiper: any) {
            if (swiper.swipeDirection === 'next') {
                swiper.slideTo(1, 0);
            return    this.pages  = [
                    ...this.pages.slice(1),
                    { year: this.pages[1].year, month: this.pages[1].month + 1 }
                ];
            }
            if (swiper.swipeDirection === 'prev') {
                swiper.slideTo(1, 0);
            return    this.pages = [
                    { year: this.pages[1].year, month: this.pages[1].month - 1 },
                    ...this.pages.slice(0, 2)
                ];
            }

        }
    }
</script>


<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";


    .swiper {
        width: 100vw;
        position: absolute;
        left: 50%;
        top: 70%;
        margin-left: -190px;
        margin-top: -350px;
        .swiper-slide {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            background-color: $bg;
            background-position: center;
            background-size: cover;
            color: #fff;
        }
    }
</style>