<template>
    <swiper :options="swiperOption" class="swiper"
            @slideChangeTransitionEnd="slideChangeTransitionEnd"

            ref="mySwiper"
    >
        <swiper-slide>
            <TagRecordList :data="this.childPages[0]" :top="this.topRecordList"></TagRecordList>
        </swiper-slide>
        <swiper-slide>
            <DateRecordList :data="this.childPages[1]"
                            :earningMonthTotal="this.earningMonthTotal"
                            :payMonthTotal="this.payMonthTotal"></DateRecordList>
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
    import { Component, Inject, Provide, Watch } from 'vue-property-decorator';
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
    import 'swiper/swiper-bundle.css';
    import SwiperOptions from '@/components/Statement/Swiper/SwiperOptions';
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
        @Inject() eventBus!: Vue;

        index = 0

        swiperOption: {} = SwiperOptions;
        /*
                要传四个参数
                1. 按支出收入 => 总览 => recordList.selectedTag
                2. 按时间排序 => 明细 => recordList.selectedDate
                3. 按类别排序 => 类别 => recordList.selectedIco
                4. 按金额排序 => 排行 => recordList.output
        */

        childPages: Record<string, any> = [
            { tagRecordList: [this.earning, this.pay, this.earningTotal, this.payTotal] },
            { dateRecordList: this.dateRecordList,},
            { icoRecordList: [ this.earningTotal, this.payTotal , this.balance] },
            { outputRecordList: this.outputRecordList }
        ];

        payMonthArr: string[] = ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0',];
        earningMonthArr: string [] = ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0',];

/*        slideChangeTransitionStart(){
            this.index = this.index -1
        }*/

        slideChangeTransitionEnd(swiper: any) {
            console.log('transiton end')
            console.log(swiper.realIndex);
            //console.log(swiper.swipeDirection);
            //console.log(this.index);//0
            this.eventBus.$emit('changeIndex', swiper.realIndex)
            // if (swiper.swipeDirection === 'next') {
            //     this.index = (this.index + 1 )%4
            //     console.log('page')
            //     console.log(this.index);//0
            //     this.eventBus.$emit('changeIndex', swiper.realIndex)
            // }
            // if (swiper.swipeDirection === 'prev') {
            //     this.index = (this.index -1)%4
            //     console.log('page')
            //     console.log(this.index)
            //     this.eventBus.$emit('changeIndex', this.index)
            // }

        }

        mounted(){
            window.mySwiper = this.mySwiper
            this.eventBus.$on('updateIndex',(index: number)=>{
                console.log('接受到 index', index)
                //this.index = index;
                this.mySwiper.slideTo(index+1, 100)

            })
        }

        // TS 不识别，没办法
        get mySwiper(){

            return this.$refs.mySwiper.$swiper
        }
        get recordList() {
            return this.$store.state.recordList;
        }

        get pay() {
            return this.recordList.filter((i: { selectedTag: string }) => i.selectedTag === '支出')
                .sort((a: any, b: any) => {
                        return new Date(b.selectedDate).getTime() - new Date(a.selectedDate).getTime();
                    }
                );
        }

        get payTotal() {
            return this.pay.reduce((sum: number, item: { output: string }) => {
                return sum + Number(item.output);
            }, 0);
        }

        get earning() {
            return this.recordList.filter((i: { selectedTag: string }) => i.selectedTag === '收入')
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
        get balance (){
            return this.earningTotal-this.payTotal
        }
        get dateRecordList() {
            return (this.recordList.concat([])).sort((a: recordItem, b: recordItem) => {
                return new Date(b.selectedDate).getTime() - new Date(a.selectedDate).getTime();
            });
        }

        get icoRecordList() {
            return (this.recordList.concat([])).sort((a: recordItem, b: recordItem) => {
                return a.selectedIco > b.selectedIco ? 1 : -1;
            });
        }

        get outputRecordList() {
            return (this.recordList.concat([])).sort((a: recordItem, b: recordItem) => {
                return parseInt(a.output) > parseInt(b.output) ? -1 : 1;
            });
        }

        get topRecordList() {
            return this.outputRecordList.slice(0, 3);
        }

        get payMonthTotal() {
            this.pay.forEach((i: { selectedDate: string; output: string }) => {
                const index = new Date(i.selectedDate).getMonth();
                this.payMonthArr[index] = (parseInt(this.payMonthArr[index]) + parseInt(i.output)) + '';
            });
            return this.payMonthArr;
        }

        get earningMonthTotal() {
            this.earning.forEach((i: { selectedDate: string; output: string }) => {
                const index = new Date(i.selectedDate).getMonth();
                this.earningMonthArr[index] = (parseInt(this.earningMonthArr[index]) + parseInt(i.output)) + '';
            });
            return this.earningMonthArr;
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