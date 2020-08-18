<template>
    <nav >
        <router-link to="/total" class="item">总计</router-link>
        |
        <router-link to="/record" class="item">记录</router-link>
        |
        <router-link to="/statement" class="item">报表</router-link>
    </nav>
</template>

<script lang="ts" >
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';

    @Component
    export default class Nav extends Vue {

    }
</script>

<style lang="scss" scoped>
    nav {
        display: flex;
        justify-content: space-around;
        border:1px solid red;
        > .item{
            border: 1px solid red;
        }
    }
</style>