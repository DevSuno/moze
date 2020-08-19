<template>
    <div>
        <Topbar/>
        <div>
            <div>
                <span>总额：</span>
                <span>金额</span>
                <span><Icon name="directory"/> 每周查看</span>
                <div>图表</div>
                <ol>
                    <li>余额</li>
                    <li>支出</li>
                    <li>收入</li>
                </ol>
            </div>
        </div>
        <Nav/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    import Topbar from '@/components/Total/Topbar.vue';

    @Component({
        components: { Topbar }
    })
    export default class Total extends Vue {

    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/reset.scss";
</style>