<template>
    <div class="dateRecordList">
        <div class="echarts"></div>
        <div class="content">
            <div :key="index"
                 class="record"
                 v-for="( detail, index ) in this.data.dateRecordList">
                <div class="text-wrapper">
                    <p class="text"> {{detail.selectedDate}}</p>
                </div>
                <div class="data">
                    <Icon :name="detail.selectedIco" class="icon"></Icon>
                    <span class="note">{{detail.note}}</span>
                    <span
                            :class="[
                                    {'pay': isPay(detail)},
                                    {'earning' : isEarning(detail)}]">
                        {{'￥'+ detail.output}}
                    </span>
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

        .content {
            margin-top: 20px;

            .record {
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

                    .pay {
                        color: $color-lightred;
                    }

                    .earning {
                        color: $color-lightgreen;

                    }
                }
            }
        }
    }

</style>