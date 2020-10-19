<template>
    <div class="dateRecordList">
        <echarts :options="dateOptions" class="echarts">
        </echarts>
        <div class="type">
            <span class="balance"><span class="balance-yuan"></span>余额</span>
            <span class="pay"><span class="pay-yuan"></span>支出</span>
            <span class="earning"> <span class="earning-yuan"></span>收入</span>
        </div>
        <div class="content">
            <div class="date">
                <h4>明细 &nbsp; &nbsp; (时间排序)</h4>
                <div :class="[  {pay : isPay(detail)},
                                {earning : isEarning(detail)}]"
                     class="data-wrapper"
                     :key="index"
                     v-for="( detail, index ) in this.data.dateRecordList">
                    <div class="text-wrapper">
                        <p class="text"> {{detail.selectedDate}}</p>
                    </div>
                    <div class="data">
                        <Icon :name="detail.selectedIco" class="icon"></Icon>
                        <div class="class">{{detail.selectedText}}</div>
                        <div class="note">{{detail.note}}</div>
                        <div
                                :class="[
                                    {'pay': isPay(detail)},
                                    {'earning' : isEarning(detail)}]">
                        {{'￥'+ detail.output}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component, Prop } from 'vue-property-decorator';
    import Echarts from '@/components/Statement/echarts.vue';

    @Component({
        components: { Echarts }
    })

    export default class DateRecordList extends Vue {
        @Prop() data!: {};
        @Prop() payMonthTotal!: []
        @Prop() earningMonthTotal!: []

        get dateOptions(){
            return {
                tooltip: {
                    trigger: 'axis'
                },
                grid: {
                    left: '3%',
                    right: '3%',
                    top: '3%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    splitLine: { show: false },
                    data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                    axisLine:{
                        lineStyle:{
                            color: '#fff',
                        }
                    }
                },
                yAxis: {
                    type: 'value',
                    splitLine: { show: false },
                    axisLine:{
                        lineStyle:{
                            color: '#fff',
                        }
                    }
                },
                series: [
                    {
                        name: '收入',
                        type: 'line',
                        stack: '总量',
                        data: this.earningMonthTotal,
                        color: '#9fd26a',
                    },
                    {
                        name: '支出',
                        type: 'line',
                        stack: '总量',
                        data: this.payMonthTotal,
                        color:'#ea5e69'
                    },
                ]
            }
        }
        isPay(detail: any) {
            return detail.selectedTag === '支出';
        }

        isEarning(detail: any) {
            return detail.selectedTag === '收入';
        }
    }
</script>

<style lang="scss" scoped>
@import "dateRecordList.scss";

</style>