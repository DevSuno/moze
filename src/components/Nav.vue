<template>
    <nav>
        <router-link class="item" to="/total">
            <Icon name="total"/>
        </router-link>
        |
        <router-link class="item" to="/record">
            <Icon name="add"/>
        </router-link>
        |
        <router-link class="item" to="/statement">
            <Icon name="statement"/>
        </router-link>
    </nav>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';

    @Component
    export default class Nav extends Vue {

    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/reset.scss";

    nav {
        display: flex;
        justify-content: space-around;
        line-height: 36px;
        font-size: 32px;
        border: 1px solid red;

        > .item {
            border: 1px solid red;
        }
    }
</style>