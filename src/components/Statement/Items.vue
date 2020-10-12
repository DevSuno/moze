<template>
    <div class="items">
        <div :class="[{selected:true}]"
             :key="item" class="item" v-for="item in items">
            {{item}}
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';

    @Component
    export default class Items extends Vue {
        items: string[] = ['总览', '明细', '类别', '排行'];
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";
    .items {
        margin: 20px 0 20px 0;
        display: flex;
        flex-direction: row;

        > .item {
            width: 25%;
            text-align: center;
            position: relative;

            &.selected::after {
                position: absolute;
                content: ' ';
                width: 50%;
                height: 2px;
                left: 25%;
                bottom: -10px;
                background: $color-blueselected;
            }
        }

    }

</style>