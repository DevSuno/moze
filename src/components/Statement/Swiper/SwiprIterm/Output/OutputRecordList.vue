<template>
    <div class="outputRecordList">
        <div class="type">
            <span class="balance"><span class="balance-yuan"></span>余额</span>
            <span class="pay"><span class="pay-yuan"></span>支出</span>
            <span class="earning"> <span class="earning-yuan"></span>收入</span>
        </div>
        <div class="content">
            <div class="output">
                <h4>Top &nbsp; &nbsp; 排行</h4>
                <div :class="[  {pay : isPay(output)},
                                {earning : isEarning(output)}]"
                     :key="index"
                     class="data-wrapper"
                     v-for="(output , index ) in this.data.outputRecordList">
                    <div class="text-wrapper">
                        <p class="text"> {{output.selectedDate}}</p>
                    </div>
                    <div class="data">
                        <Icon :name="output.selectedIco" class="icon"></Icon>
                        <div class="class">{{output.selectedText}}</div>
                        <div class="note">{{output.note}}</div>
                        <div>{{'￥'+ output.output}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component, Prop } from 'vue-property-decorator';
    @Component({

    })

    export default class OutputRecordList extends Vue {
        @Prop() data!: {};

        isPay(output: any) {
            return output.selectedTag === '支出';
        }

        isEarning(output: any) {
            return output.selectedTag === '收入';
        }
    }
</script>

<style lang="scss" scoped>
    @import "outputRecordList.scss";
</style>