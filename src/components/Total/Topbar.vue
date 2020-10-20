<template>
    <div class="topbar ">

        <Icon @click="tabSwitch" name="eye"/>
        <div class="rainbow">
            <span>账</span>
            <span>户</span>
            <span>总</span>
            <span>览</span>
        </div>
        <span class="placeholder"></span>

    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component, Inject } from 'vue-property-decorator';

    @Component
    export default class Topbar extends Vue {
        @Inject() eventBus!: Vue;

        tabSwitch() {
            this.eventBus.$emit('updateSwitch',);
        }

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
    @import "~@/assets/style/helper.scss";
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
        justify-content: space-between;
        align-items: center;

        > .icon {
            width: 32px;
            height: 20px;
            padding-left: 12px;

        }

        > .rainbow {
            font-size: 18px;
            > span {
                font-size: 18px;
                animation: rainbow 20s alternate infinite forwards;
            }
        }

        > .placeholder {
            padding-right: 32px;
        }
    }
</style>