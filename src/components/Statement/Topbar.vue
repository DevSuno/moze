<template>
    <div class="topbar">
        <div class="rainbow">
            <span>图</span>
            <span>表</span>
            <span>报</span>
            <span>表</span>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';

    @Component
    export default class Topbar extends Vue {
        rainbow(){
            const letters = (document.querySelectorAll('.rainbow span') as any);
            letters.forEach((span: { style: { animationDelay: string } }, i: number) => {
                span.style.animationDelay = `${-20 + i * 0.2}s`;
            });
        }
        mounted() {
            this.rainbow()
        }
    }
</script>

<style lang="scss" scoped>
    @keyframes rainbow {
        @for $i from 0 through 20 {
            #{percentage($i * 0.05)} {
                color: hsl(random(360%), 75, 75);
            }
        }
    }
    .topbar {
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        > .rainbow {
            font-size: 18px;
            > span {
                font-size: 18px;
                animation: rainbow 20s alternate infinite forwards;
            }
        }

        > .text{
            display: block;
            text-align: center;
            font-size: 18px;
        }
    }
</style>