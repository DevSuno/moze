<template>
    <div class="topbar">

        <Icon name="eye" @click="tabSwitch"/>
        <span class="text">账户总览</span>
        <span class="placeholder"></span>

    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component, Inject } from 'vue-property-decorator';

    @Component
    export default class Topbar extends Vue {
        @Inject() eventBus!: Vue;
        tabSwitch(){
            this.eventBus.$emit("updateSwitch",)
        }


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
    span {
        animation: rainbow 20s alternate infinite forwards;
    }
    @keyframes rainbow {
        @for $i from 0 through 20 {
            #{percentage($i * 0.05)} {
                color: hsl(random(360%), 75, 75);
            }
        }
    }
    > .text {
        font-size: 18px;

    }
    > .placeholder {
        padding-right: 32px;
    }
}
</style>