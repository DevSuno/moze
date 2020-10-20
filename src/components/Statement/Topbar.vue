<template>
    <div class="topbar">
        <span class="text">图表报表</span>
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
        > .text{
            display: block;
            text-align: center;
            font-size: 18px;
        }
    }
</style>