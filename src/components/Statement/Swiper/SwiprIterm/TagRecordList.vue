<template>
    <div class="tagRecordList">
        <div class="echarts">
            <div>
                <span class="earning-yuan"></span>
                {{'收入' + this.data.tagRecordList[2] + '元'}}
                <span class="pay-yuan"></span>
                {{'支出' + this.data.tagRecordList[3] + '元'}}
                {{'余额' + (this.data.tagRecordList[2] - this.data.tagRecordList[3]) + '元'}}
            </div>
        </div>
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
    import echarts from 'echarts'
    import { Component, Prop } from 'vue-property-decorator';

    @Component
    export default class TagRecordList extends Vue {
        @Prop() data!: {};
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";

    .tagRecordList {
        width: 100vw;

        .content {
            margin-top: 20px;

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