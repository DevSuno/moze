<template>
    <div>
        <ul class="tabs">
            <li :class="[{selected: tab.tab === selectedTab}] " :key="tab.tab"
                @click="changeSelectedTab(tab.tab)"
                v-for="tab in tabs"
            >{{tab.tab}}
            </li>

        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component, Inject } from 'vue-property-decorator';

    type Tab = [{ tab: string }, { tab: string }]

    @Component

    export default class Tabs extends Vue {
        @Inject() eventBus!: Vue;
        selectedTab = '支出';
        tabs: Tab = [{ tab: '支出' }, { tab: '收入' }];

        //初始
        mounted() {
            this.eventBus.$emit('updateSelectedTab', this.selectedTab);
        }

        //实时更新
        changeSelectedTab(tab: string) {
            this.selectedTab = tab;
            this.eventBus.$emit('updateSelectedTab', this.selectedTab);
            this.$emit('selectedTab',this.selectedTab)
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/style/helper.scss";

    .tabs {
        margin-top: 10px;
        display: flex;
        flex-direction: row;

        > li {
            width: 50%;
            color: $color-normal;
            text-align: center;
            padding: 15px 0;
            position: relative;

            &.selected {
                color: $color;
            }

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