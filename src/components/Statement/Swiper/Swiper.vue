<template>
    <swiper :options="swiperOption" class="swiper">
        <swiper-slide>
            <TagRecordList :data="this.childPages[0]"></TagRecordList>
        </swiper-slide>
        <swiper-slide>
            <DateRecordList :data="this.childPages[1]"></DateRecordList>
        </swiper-slide>
        <swiper-slide>
            <IcoRecordList :data="this.childPages[2]"></IcoRecordList>
        </swiper-slide>
        <swiper-slide>
            <OutputRecordList :data="this.childPages[3]"></OutputRecordList>
        </swiper-slide>
    </swiper>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
    import 'swiper/swiper-bundle.css';
    import SwiperOptions from '@/components/Statement/Swiper/SwiperOptions';
    import clone from '@/lib/clone';
    import TagRecordList from '@/components/Statement/Swiper/SwiprIterm/TagRecordList.vue';
    import DateRecordList from '@/components/Statement/Swiper/SwiprIterm/DateRecordList.vue';
    import IcoRecordList from '@/components/Statement/Swiper/SwiprIterm/IcoRecordList.vue';
    import OutputRecordList from '@/components/Statement/Swiper/SwiprIterm/OutputRecordList.vue';

    @Component({
        components: {
            OutputRecordList,
            IcoRecordList,
            DateRecordList,
            TagRecordList,
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

        childPages: Record<string, any> = [
            { tagRecordList: [this.earning, this.pay] },
            { dateRecordList: this.dateRecordList },
            { icoRecordList: this.icoRecordList },
            { outputRecordList: this.outputRecordList }
        ];

        get recordList() {
            return this.$store.state.recordList;
        }

        get newRecordList() {
            return clone(this.recordList);
        }

        get pay() {
            return this.newRecordList.filter((i: { selectedTag: string }) => i.selectedTag === '支出')
                .sort((a: any, b: any) => {
                        return new Date(b.selectedDate).getTime() - new Date(a.selectedDate).getTime();
                    }
                );
        }

        get earning() {
            return this.newRecordList.filter((i: { selectedTag: string }) => i.selectedTag === '收入')
                .sort((a: any, b: any) => {
                        return new Date(b.selectedDate).getTime() - new Date(a.selectedDate).getTime();
                    }
                );
        }

        get dateRecordList() {
            return this.newRecordList.sort((a: recordItem, b: recordItem) => {
                return a.selectedDate > b.selectedDate ? -1 : 1;
            });
        }

        get icoRecordList() {
            return this.newRecordList.sort((a: recordItem, b: recordItem) => {
                return a.selectedIco > b.selectedIco ? 1 : -1;
            });
        }

        get outputRecordList() {
            return this.newRecordList.sort((a: recordItem, b: recordItem) => {
                return a.output > b.output ? 1 : -1;
            });
        }
    }
</script>


<style lang="scss" scoped>
    .swiper {
        margin-top: 30px;
        width: 100vw;

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