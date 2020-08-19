<template>
    <div>
        <Topbar/>
        <Money/>
        <div>
            <span><Icon name="directory"/> 每周查看</span>
            图表
        </div>
        <div>
            <ol>
                <li>余额</li>
                <li>支出</li>
                <li>收入</li>
            </ol>
        </div>

        <Nav/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    import Topbar from '@/components/Total/Topbar.vue';
    import Money from '@/components/Total/Money.vue';

    @Component({
        components: { Money, Topbar }
    })
    export default class Total extends Vue {

    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/reset.scss";

</style>