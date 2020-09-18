<template>
    <div class="topbar">
        <Icon name="back" class="icon"></Icon>
        <span class="text">新增记录</span>
        <Icon name="true" class="icon"></Icon>

    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';

    @Component
    export default class Topbar extends Vue {

    }
</script>

<style lang="scss" scoped>
    .topbar {
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;

        > .icon{
            width: 32px;
            height: 24px;

        }
        > .text {
            font-size: 18px;

        }

    }

</style>