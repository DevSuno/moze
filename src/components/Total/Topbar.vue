<template>
    <div class="topbar">

        <Icon name="eye"/>
        <span class="text">账户总览</span>
        <span class="placeholder"></span>

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
    @import "~@/assets/style/helper.scss";
.topbar {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    > .icon{
        width: 32px;
        height: 20px;
        padding-left:12px;

    }
    > .text {
        font-size: 18px;

    }
    > .placeholder {
        padding-right: 32px;
    }
}
</style>