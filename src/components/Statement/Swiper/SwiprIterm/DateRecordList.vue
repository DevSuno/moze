<template>
    <div class="">
        <div class="echarts"></div>
        <div class="content">
            <h3 >明细、按时间排</h3>{{data}}
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component, Prop } from 'vue-property-decorator';

    @Component
    export default class DateRecordList extends Vue {
        @Prop() data!: {};

    }
</script>

<style lang="scss" scoped>

</style>