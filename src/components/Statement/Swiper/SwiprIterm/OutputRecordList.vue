<template>
    <div class="">
        <div class="echarts"></div>
        <div class="content">
            <h3 >排行、金额</h3>{{data}}
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component, Prop } from 'vue-property-decorator';

    @Component
    export default class OutputRecordList extends Vue {
        @Prop() data!: {};

    }
</script>

<style lang="scss" scoped>

</style>