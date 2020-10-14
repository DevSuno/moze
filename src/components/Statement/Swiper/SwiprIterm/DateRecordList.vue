<template>
    <div class="dateRecordList">
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

    @Component
    export default class DateRecordList extends Vue {
        @Prop() data!: {};

        isPay(detail: any) {
            return detail.selectedTag === '支出';
        }

        isEarning(detail: any) {
            return detail.selectedTag === '收入';
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";

    .dateRecordList {
        width: 100vw;
        h4 {
            margin: 10px 0 10px 20px;
            color: #ffffff;
        }
        .type {
            margin-top: 10px;
            font-size: 10px;
            color: #95949f;
            text-align: center;

            > .balance {
                margin-left: 20px;
                margin-right: 5px;
                position: relative;
                color: $color-greypurple;

                > .balance-yuan {
                    position: absolute;
                    content: " ";
                    display: inline;
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    top: 5px;
                    left: -10px;
                    background: $color-greypurple;
                }
            }

            > .pay {
                margin-left: 20px;
                margin-right: 5px;
                position: relative;
                color: $color-lightred;
                > .pay-yuan {
                    position: absolute;
                    content: " ";
                    display: inline;
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    top: 5px;
                    left: -10px;
                    background: $color-lightred;
                }
            }

            > .earning {
                margin-left: 20px;
                margin-right: 5px;
                position: relative;
                color: $color-lightgreen;
                > .earning-yuan {
                    position: absolute;
                    content: " ";
                    display: inline;
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    top: 5px;
                    left: -10px;
                    background: $color-lightgreen;
                }
            }
        }
        .content {
            margin-top: 20px;
            .date {

                .earningText {
                    font-size: 14px;
                }

                .pay {
                    color: $color-lightred;
                }

                .earning {
                    color: $color-lightgreen;

                }

                .data-wrapper {
                    border-bottom: 0.5px solid gray;

                    .text-wrapper {
                        .text {
                            margin: 3px 0 3px 20px;
                            color: $color-normal;
                        }
                    }

                    .data {
                        margin: 6px 0 6px 0;
                        display: flex;
                        flex-direction: row;
                        justify-content: center;

                        .icon {
                            margin: 0 15px 0 20px;
                            width: 30px;
                            height: 30px;

                        }

                        .note {
                            flex-grow: 1;
                            text-align: center;
                        }

                        .class {
                            margin-left: 5px;
                        }

                        div {
                            margin: 0 20px 0 15px;
                            text-align: center;
                            line-height: 30px;
                        }
                    }
                }
            }
        }
    }

</style>