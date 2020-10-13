<template>
    <div class="tagRecordList">
        <echarts :options="chartOptions" class="echarts">
            <div>
                <span class="earning-yuan"></span>
                {{'收入' + this.data.tagRecordList[2] + '元'}}
                <span class="pay-yuan"></span>
                {{'支出' + this.data.tagRecordList[3] + '元'}}
                {{'余额' + (this.data.tagRecordList[2] - this.data.tagRecordList[3]) + '元'}}
            </div>
        </echarts>
        <div class="content">
            <div class="earning">
                <div :key="index" class="data-wrapper"
                     v-for="(earning , index ) in this.data.tagRecordList[0] ">
                    <div class="text-wrapper">
                        <p class="text"> {{earning.selectedDate}}</p>
                    </div>
                    <div class="data">
                        <Icon :name="earning.selectedIco" class="icon"></Icon>
                        <span class="note">{{earning.note}}</span>
                        <span>
                            {{'￥'+ earning.output}}
                        </span>
                    </div>
                </div>
            </div>
            <div class="pay">
                <div :key="index" class="data-wrapper"
                     v-for="( pay, index ) in this.data.tagRecordList[1] ">
                    <div class="text-wrapper">
                        <p class="text"> {{pay.selectedDate}}</p>
                    </div>
                    <div class="data">
                        <Icon :name="pay.selectedIco" class="icon"></Icon>
                        <span class="note">{{pay.note}}</span>
                        <span>
                            {{'￥'+ pay.output}}
                        </span>
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

        get chartOptions() {
            return {
                dataset: {
                    source: [
                        ['sum','type'],
                        [this.data.tagRecordList[2], '收入'],
                        [this.data.tagRecordList[3], '支出'],
                        [(this.data.tagRecordList[2] - this.data.tagRecordList[3]), '余额'],

                    ]
                },
                grid:{
                    top:'5%',
                    bottom:'10%',
                    left:'25%',
                    right:'10%',
                    width:'50%',
                },
                xAxis: {
                    name: '元',
                    show:false,
                    splitLine:{show: false},
                    axisLabel:{
                        color:"#999"
                    },
                    axisTick:{ //x轴刻度线
                        show:false
                    },
                    axisLine:{ //x轴
                        show:false
                    }
                },
                yAxis: {
                    type: 'category',
                    //maxInterval: 300,
                    splitLine:{show: false},
                    axisLabel:{
                        margin: 10,
                        //color:"#111",
                        color: function (params: any,index: any) {
                            const colorList = ['#9fd26a', '#ea5e69', '#a4789f'];
                            return colorList[index]
                        },
/*                        textStyle:{
                            color: function (params: any) {
                                const colorList = ['#9fd26a', '#ea5e69', '#a4789f'];
                                return colorList[params.dataIndex]
                            }
                        }*/
                    },
                    axisTick:{ //y轴刻度线
                        show:false
                    },
                    axisLine:{ //y轴
                        show:false
                    }
                },
                series: [
                    {
                        type: 'bar',
                        barWidth : 5,
                        encode: {
                            // Map the "sum" column to X axis.
                            x: 'sum',
                            // Map the "type" column to Y axis
                            y: 'type'
                        },

                        itemStyle: {
                            normal: {

                                label: {
                                    formatter: '￥'+"{@sum}" + "元",
                                    show: true,
                                    position: "right",
                                    textStyle: {
                                        fontWeight: "bolder",
                                        fontSize: "8",
                                        color: "#fff"
                                    },
                                },
                                    /*
                                随机显示
                                    color:function(d){
                                     return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);
                                     }

                                定制显示（按顺序）*/
                                color: function (params: any) {
                                    const colorList = ['#9fd26a', '#ea5e69', '#a4789f'];
                                    return colorList[params.dataIndex]
                                }
                            },

                        },
                    }
                ]
            };
        }
    }

</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";

    .tagRecordList {
        width: 100vw;
        .echarts{
            height: 80px;
        }
        .content {
            margin-top: 100px;

            .earning {
                color: $color-lightred;

                .earningText {
                    font-size: 14px;
                }

                .data-wrapper {
                    border-bottom: 0.5px solid gray;

                    .text-wrapper {
                        .text {
                            color: $color-normal;
                        }
                    }

                    .data {
                        margin: 6px 0 6px 0;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;

                        .icon {
                            margin: 0 15px 0 20px;
                            width: 30px;
                            height: 30px;
                        }

                        .note {
                            flex-grow: 1;
                            text-align: center;

                        }

                        span {
                            margin: 0 20px 0 15px;
                            text-align: center;
                            display: flex;
                            align-items: center;
                        }
                    }

                }
            }

            .pay {
                color: $color-lightgreen;

                .payText {
                    font-size: 14px;
                }

                .data-wrapper {
                    border-bottom: 0.5px solid gray;

                    .text-wrapper {
                        .text {
                            color: $color-normal;
                        }
                    }

                    .data {
                        margin: 6px 0 6px 0;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;

                        .icon {
                            margin: 0 15px 0 20px;
                            width: 30px;
                            height: 30px;
                        }

                        .note {
                            flex-grow: 1;
                            text-align: center;

                        }

                        span {
                            margin: 0 20px 0 15px;
                            text-align: center;
                        }
                    }

                }
            }
        }
    }
</style>