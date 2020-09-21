<template>
    <div>
        <ul class="tabs">
            <li :class="[{selected: tab.tab === selectedTab}] " :key="tab"
                @click="changeSelectedTab(tab.tab)"
                v-for="tab in tabs"
            >{{tab.tab}}
            </li>

        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';

    type Tab = [{ tab: string }, { tab: string }]

    @Component

    export default class Tabs extends Vue {
        selectedTab = '支出';
        tabs: Tab = [{ tab: '支出' }, { tab: '收入' }];
        changeSelectedTab(tab: string){
            this.selectedTab = tab
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/style/helper.scss";

    .tabs {
        margin-top: 20px;
        display: flex;
        flex-direction: row;

        > li {
            width: 50%;
            text-align: center;
            padding: 10px 0;
            position: relative;

            &.selected::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 2px;
                background: $color-blueselected;
            }

        }
    }
</style>