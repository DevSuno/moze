<template>
    <div>
        <ul class="tabs">
            <li :class="[{selected:true}] ">支出</li>
            <li>收入</li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';

    @Component
    export default class Tabs extends Vue {

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