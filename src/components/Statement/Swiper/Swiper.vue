<template>
    <swiper :options="swiperOption" class="swiper">
        <swiper-slide>
            <TagRecordList :data="this.childPages[0]" :top="this.topRecordList"></TagRecordList>
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
    import TagRecordList from '@/components/Statement/Swiper/SwiprIterm/Tag/TagRecordList.vue';
    import DateRecordList from '@/components/Statement/Swiper/SwiprIterm/Date/DateRecordList.vue';
    import IcoRecordList from '@/components/Statement/Swiper/SwiprIterm/IcoRecordList.vue';
    import OutputRecordList from '@/components/Statement/Swiper/SwiprIterm/Output/OutputRecordList.vue';

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
            { tagRecordList: [this.earning, this.pay ,this.earningTotal,this.payTotal] },
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
        get payTotal(){
            return     this.pay.reduce((sum: number, item: { output: string }) => {
                return sum + Number(item.output);
            }, 0);
        }

        get earning() {
            return this.newRecordList.filter((i: { selectedTag: string }) => i.selectedTag === '收入')
                .sort((a: any, b: any) => {
                        return new Date(b.selectedDate).getTime() - new Date(a.selectedDate).getTime();
                    }
                );
        }

        get earningTotal() {
            return this.earning.reduce((sum: number, item: { output: string }) => {
                return sum + Number(item.output);
            }, 0);
        }

        get dateRecordList() {
            return this.newRecordList.sort((a: recordItem, b: recordItem) => {
                return new Date(b.selectedDate).getTime() - new Date(a.selectedDate).getTime();
            });
        }

        get icoRecordList() {
            return this.newRecordList.sort((a: recordItem, b: recordItem) => {
                return a.selectedIco > b.selectedIco ? 1 : -1;
            });
        }

        get outputRecordList() {
            return this.newRecordList.sort((a: recordItem, b: recordItem) => {
                return a.output > b.output ? -1 : 1;
            });
        }

        get topRecordList (){
            return this.outputRecordList.splice(0,3)
        }
    }
</script>


<style lang="scss" scoped>
    .swiper {
        margin-top: 25px;
        width: 100vw;

        .swiper-slide {
            display: flex;
            justify-content: center;
            align-items: center;
            background-position: center;
            background-size: cover;
            color: #fff;
        }
    }
</style>