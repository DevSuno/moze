<template>

        <Layout class-prefix="layout">
            <Topbar/>
            <Money/>
            <Statistics/>
            <Type/>
        </Layout>

</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component, Provide } from 'vue-property-decorator';
    import Topbar from '@/components/Total/Topbar.vue';
    import Money from '@/components/Total/Money.vue';
    import Statistics from '@/components/Total/Statistics.vue';
    import Type from '@/components/Total/Type.vue';

    @Component({
        components: { Type, Statistics, Money, Topbar }
    })
    export default class Total extends Vue {
        @Provide() eventBus = new Vue();

    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/reset.scss";

</style>