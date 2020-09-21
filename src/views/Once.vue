<template>
    <Layout class-prefix="layout">
        <Topbar></Topbar>
        <Tabs></Tabs>
        <Ico :payArr="payArr" :earningArr="earningArr"></Ico>

        <div>金额</div>
        <div>名称</div>
        <div>年月日</div>
        <div>时分</div>
        <div>备注</div>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component, } from 'vue-property-decorator';
    import Topbar from '@/components/Once/Topbar.vue';
    import Tabs from '@/components/Once/Tabs.vue';
    import Ico from '@/components/Once/Ico.vue';

    @Component({
        components: { Ico, Tabs, Topbar, }
    })

    export default class Once extends Vue {
        payArr: {} =[
            {name:'eat',text:'饮食'},
            {name:'traffic',text:'交通'},
            {name:'recreation',text:'娱乐'},
            {name:'hospital',text:'医院'},
            {name:'family',text:'家庭'},
            {name:'shop',text:'购物'}
        ]
        earningArr: {} = [
            {name:'wage',text:'工资'},
            {name:'bonus',text:'奖金'},
            {name:'repayment',text:'还款'},
            {name:'interest',text:'利息'},

        ]

    }
</script>

<style lang="scss" scoped>

</style>