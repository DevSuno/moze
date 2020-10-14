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
@import "dateRecordList.scss";

</style>