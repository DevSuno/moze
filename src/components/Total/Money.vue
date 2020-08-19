<template>
    <div class="money">
        <div class="title">
            <span class="summed">总 额</span>
            <span class="type">RMB</span>
        </div>
        <div class="money-sum">
            <span class="sum">金额</span>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';

    @Component
    export default class Money extends Vue {

    }
</script>

<style lang="scss" scoped>
.money {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
    > .title {
        display: flex;
        flex-direction: column;
        padding-left: 60px;
        padding-right: 20px;
    }
    > .money-sum {
        font-size: 30px;
    }
}
</style>