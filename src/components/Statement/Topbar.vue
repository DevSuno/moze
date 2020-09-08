<template>
    <div class="topbar">
        <span class="text">每月报表</span>
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
        > .text{
            display: block;
            text-align: center;
            font-size: 18px;
        }
    }
</style>