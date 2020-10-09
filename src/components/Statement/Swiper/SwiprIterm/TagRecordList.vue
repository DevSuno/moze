<template>
    <div class="">
        <div class="echarts"></div>
        <div class="content">
            <div class="earning">
                <span class="earning-yuan"></span>
                <span>收入</span>
                <p v-for="(earning , index ) in this.data.tagRecordList[0] " :key="index">
                    {{earning.selectedDate}}
                    {{earning.output + '元'}}
                </p>
            </div>
            <div class="pay">
                <span class="pay-yuan"></span>
                <span>支出</span>
                <p v-for="( pay, index ) in this.data.tagRecordList[1] " :key="index">
                    {{pay.selectedDate}}
                    {{pay.output + '元'}}
                </p>
            </div>
<!--            <h3 v-for="(Tag,index) in data.tagRecordList" :key="index">
                {{Tag}}
            </h3>-->

        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component, Prop } from 'vue-property-decorator';

    @Component
    export default class TagRecordList extends Vue {
        @Prop() data!: {};


    }
</script>

<style lang="scss" scoped>

</style>