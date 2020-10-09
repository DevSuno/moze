<template>
    <swiper :options="swiperOption" class="swiper">
        <swiper-slide>
            <SwiperChild :data="this.recordList"></SwiperChild>
        </swiper-slide>
        <swiper-slide>
            <SwiperChild :data="this.recordList"></SwiperChild>
        </swiper-slide>
        <swiper-slide>
            <SwiperChild :data="this.recordList"></SwiperChild>
        </swiper-slide>
        <swiper-slide>
            <SwiperChild :data="this.recordList"></SwiperChild>
        </swiper-slide>
    </swiper>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
    import 'swiper/swiper-bundle.css';
    import SwiperOptions from '@/components/Statement/Swiper/SwiperOptions';
    import SwiperChild from '@/components/Statement/Swiper/SwiperChild.vue';
    import clone from '@/lib/clone';

    @Component({
        components: {
            SwiperChild,
            Swiper,
            SwiperSlide
        },
    })
    export default class Swiper2 extends Vue {
        swiperOption: {} = SwiperOptions;
/*
        要传四个参数
        1. 按支出收入 => 总览 => recordList.selectedTag
        2. 按时间排序 => 明细 => recordList.selectedDate
        3. 按类别排序 => 类别 => recordList.selectedIco
        4. 按金额排序 => 排行 => recordList.output
*/

        childPages: Record<string, any>=[
            { tagRecordList : this.tagRecordList },
            { dateRecordList : this.dateRecordList},
            { icoRecordList : this.icoRecordList},
            { outputRecordList : this.outputRecordList}
        ]

        mounted() {
            console.log(this.childPages)
        }
        get recordList() {
            return this.$store.state.recordList;
        }
        get newRecordList (){
            return clone(this.recordList)
        }

        get tagRecordList (){
            return this.pay.concat(this.earning)
        }
        get pay(){
            return this.newRecordList.filter((i: { selectedTag: string })=> i.selectedTag === '支出')
        }
        get earning(){
            return this.newRecordList.filter((i: { selectedTag: string })=> i.selectedTag === '收入')
        }
        get dateRecordList (){
            return this.newRecordList.sort((a: recordItem, b: recordItem) => {
                return a.selectedDate > b.selectedDate?1: -1;
            })
        }

        get icoRecordList (){
            return this.newRecordList.sort((a: recordItem, b: recordItem) => {
                return a.selectedIco > b.selectedIco ? 1 : -1;
            })
        }
        get outputRecordList (){
            return this.newRecordList.sort((a: recordItem, b: recordItem) => {
                return a.output > b.output ? 1 : -1;
            })
        }
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