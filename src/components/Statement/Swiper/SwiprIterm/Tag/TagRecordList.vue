<template>
    <div class="tagRecordList">
        <echarts :options="totalOptions" class="total">
        </echarts>
        <div>
            <span class="earning-yuan"></span>
            {{'收入' + this.data.tagRecordList[2] + '元'}}
            <span class="pay-yuan"></span>
            {{'支出' + this.data.tagRecordList[3] + '元'}}
            {{'余额' + (this.data.tagRecordList[2] - this.data.tagRecordList[3]) + '元'}}
        </div>


        <echarts :options="topOptions" class="total">
        </echarts>
        <div class="content">
            <div class="top">
                <h4>Top &nbsp; &nbsp; 3</h4>
                <div :class="[  {pay : isPay(item)},
                                {earning : isEarning(item)}]"
                     :key="top + '1'"
                     class="data-wrapper"
                     v-for="(item , top ) in this.top">
                    <div class="text-wrapper">
                        <p class="text"> {{item.selectedDate}}</p>
                    </div>
                    <div class="data">
                        <Icon :name="item.selectedIco" class="icon"></Icon>
                        <div class="class">{{item.selectedText}}</div>
                        <div class="note">{{item.note}}</div>
                        <div>{{'￥'+ item.output}}</div>
                    </div>
                </div>
            </div>
            <div class="earning">
                <h4>收 &nbsp; &nbsp;入 （按时间排）</h4>
                <div :key="index + '2'"
                     class="data-wrapper"
                     v-for="(earning , index ) in this.data.tagRecordList[0] ">
                    <div class="text-wrapper">
                        <p class="text"> {{earning.selectedDate}}</p>
                    </div>
                    <div class="data">
                        <Icon :name="earning.selectedIco" class="icon"></Icon>
                        <div class="class">{{earning.selectedText}}</div>
                        <div class="note">{{earning.note}}</div>
                        <div>
                            {{'￥'+ earning.output}}
                        </div>
                    </div>
                </div>
            </div>
            <div class="pay">
                <h4>支&nbsp; &nbsp;出 （按时间排）</h4>
                <div :key="index + '3'" class="data-wrapper"
                     v-for="( pay, index ) in this.data.tagRecordList[1] ">
                    <div class="text-wrapper">
                        <p class="text"> {{pay.selectedDate}}</p>
                    </div>
                    <div class="data">
                        <Icon :name="pay.selectedIco" class="icon"></Icon>
                        <div class="class">{{pay.selectedText}}</div>
                        <div class="note">{{pay.note}}</div>
                        <div>
                            {{'￥'+ pay.output}}
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
    export default class TagRecordList extends Vue {
        @Prop() data!: {};
        @Prop() option!: {};
        @Prop() top!: [];

        get totalOptions() {
            return {
                dataset: {
                    source: [
                        ['sum', 'type'],
                        [this.data.tagRecordList[2], '收入'],
                        [this.data.tagRecordList[3], '支出'],
                        [(this.data.tagRecordList[2] - this.data.tagRecordList[3]), '余额'],

                    ]
                },
                grid: {
                    top: '5%',
                    bottom: '10%',
                    left: '25%',
                    right: '10%',
                    width: '50%',
                },
                xAxis: {
                    name: '元',
                    show: false,
                    splitLine: { show: false },
                    axisLabel: {
                        color: '#999'
                    },
                    axisTick: { //x轴刻度线
                        show: false
                    },
                    axisLine: { //x轴
                        show: false
                    }
                },
                yAxis: {
                    type: 'category',
                    //maxInterval: 300,
                    splitLine: { show: false },
                    axisLabel: {
                        margin: 10,
                        color: function (params: any, index: any) {
                            const colorList = ['#9fd26a', '#ea5e69', '#a4789f'];
                            return colorList[index];
                        },
                    },
                    axisTick: { //y轴刻度线
                        show: false
                    },
                    axisLine: { //y轴
                        show: false
                    }
                },
                series: [
                    {
                        type: 'bar',
                        barWidth: 5,
                        encode: {
                            // Map the "sum" column to X axis.
                            x: 'sum',
                            // Map the "type" column to Y axis
                            y: 'type'
                        },

                        itemStyle: {
                            normal: {

                                label: {
                                    formatter: '￥' + '{@sum}' + '元',
                                    show: true,
                                    position: 'right',
                                    textStyle: {
                                        fontWeight: 'bolder',
                                        fontSize: '8',
                                        color: '#fff'
                                    },
                                },
                                /*
                                随机显示
                                color:function(d){
                                    return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);
                                }*/

                                /*定制显示（按顺序）*/
                                color: function (params: any) {
                                    const colorList = ['#9fd26a', '#ea5e69', '#a4789f'];
                                    return colorList[params.dataIndex];
                                }
                            },

                        },
                    }
                ]
            };
        }

        get topOptions() {
            return {};
        }

        isPay(output: any) {
            return output.selectedTag === '支出';
        }

        isEarning(output: any) {
            return output.selectedTag === '收入';
        }

    }

</script>

<style lang="scss" scoped>
    @import "tagRecordList.scss";
</style>