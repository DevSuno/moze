<template>
    <div class="">
        <div class="echarts"></div>
        <div class="content">
            <h3 >类别、ICO</h3>{{data}}
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component, Prop } from 'vue-property-decorator';

    @Component
    export default class IcoRecordList extends Vue {
        @Prop() data!: {};

    }
</script>

<style lang="scss" scoped>

</style>