<template>
    <Layout class-prefix="layout">
    <Topbar></Topbar>


        支出
        收入
    icon
        饮食
        交通
        娱乐
        购物
        个人
        医疗
        家居
        家庭

        薪水
        奖金
        投资
        还款
        彩票
        利息


        <div>金额</div>
        <div>名称</div>
        <div>年月日</div>
        <div>时分</div>
        <div>备注</div>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component,} from 'vue-property-decorator';
    import Topbar from '@/components/Once/Topbar.vue';
    @Component({
        components:{Topbar,}
    })
    export default class Once extends Vue {

    }
</script>

<style lang="scss" scoped>

</style>