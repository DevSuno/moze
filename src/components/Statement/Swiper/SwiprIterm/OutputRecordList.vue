<template>
    <div class="outputRecordList">
        <div class="echarts"></div>
        <div class="content">

            <div :key="index"
                 class="output"
                 v-for="( output, index ) in this.data.outputRecordList">
                <div class="text-wrapper">
                    <p class="text"> {{output.selectedDate}}</p>
                </div>
                <div class="data">
                    <Icon :name="output.selectedIco" class="icon"></Icon>
                    <span class="note">{{output.note}}</span>
                    <span
                            :class="[
                                    {'pay': isPay(output)},
                                    {'earning' : isEarning(output)}]">
                        {{'￥'+ output.output}}
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
    export default class OutputRecordList extends Vue {
        @Prop() data!: {};
        isPay(output: any) {
            return output.selectedTag === '支出';
        }

        isEarning(output: any) {
            return output.selectedTag === '收入';
        }
        mounted(){
            console.log(this.data);
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";

    .outputRecordList {
        width: 100vw;
        font-size: 14px;

        .content {
            margin-top: 20px;

            .output {
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