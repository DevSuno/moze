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
    import { Component } from 'vue-property-decorator';
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
    import 'swiper/swiper-bundle.css';
    import SwiperItem from '@/components/Calendar/SwiperItem.vue';
    import helper from '@/components/Calendar/helper';

    @Component({
        components: {
            SwiperItem,
            Swiper,
            SwiperSlide
        },
    })
    export default class Swiper2 extends Vue {
        /*        name: 'swiper-example-3d-cube'*/

        date: { year: number; month: number; day: number } = helper.getNewDate(new Date());
        pages: array = [

            {
                year: this.date.year,
                month: this.date.month - 2,
            },
            {
                year: this.date.year,
                month: this.date.month -1,
            },
            {
                year: this.date.year,
                month: this.date.month ,
            },
            {
                year: this.date.year,
                month: this.date.month + 1,
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
            console.log(typeof (swiper));
            if (swiper.swipeDirection === 'next') {
                this.pages = [
                    ...this.pages.slice(1),
                    { year: this.pages[2].year, month: this.pages[2].month + 1 }
                ];
                swiper.slideTo(0, 0);
            }
            if (swiper.swipeDirection === 'prev') {
                console.log(this.pages);
                this.pages = [{ year: this.pages[0].year, month: this.pages[0].month - 1 },
                    ...this.pages.slice(1)];
                console.log(this.pages);
                swiper.slideTo(3, 0);
            }

        }
    }
</script>


<style lang="scss" scoped>


    .swiper {
        width: 300px !important;
        height: 200px;
        position: absolute;
        left: 50%;
        top: 70%;
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