<template>
    <div>
        <div class="pay">
            <Icon name="eat"></Icon>
            <span>饮食</span>
            <Icon name="traffic"></Icon>
            <span>交通</span>
            <Icon name="recreation"></Icon>
            <span>娱乐</span>
            <Icon name="hospital"></Icon>
            <span>医院</span>
            <Icon name="family"></Icon>
            <span>家庭</span>
            <Icon name="shop"></Icon>
            <span>购物</span>
        </div>
        <div class="earning">
            <Icon name="wage"></Icon>
            <span>工资</span>

            <Icon name="bonus"></Icon>
            <span>奖金</span>

            <Icon name="repayment"></Icon>
            <span>还款</span>

            <Icon name="interest"></Icon>
            <span>利息</span>

        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';

    @Component
    export default class Ico extends Vue {

    }
</script>

<style lang="scss" scoped>

</style>