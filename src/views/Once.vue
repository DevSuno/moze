<template>
    <Layout class-prefix="layout">
        <Topbar></Topbar>
        <Tabs></Tabs>
        <Ico/>

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

    }
</script>

<style lang="scss" scoped>

</style>