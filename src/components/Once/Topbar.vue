<template>
    <div class="topbar">
        <router-link to="/record">
            <Icon class="icon" name="back"></Icon>
        </router-link>
        <div class="rainbow">
            <span>新</span>
            <span>增</span>
            <span>记</span>
            <span>录</span>
        </div>
        <Icon @click="ok" class="icon" name="true"></Icon>

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

        ok() {
            this.$emit('update');
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
        justify-content: space-around;
        align-items: center;

        .icon {
            width: 32px;
            height: 24px;

        }

        > .rainbow {
            font-size: 18px;
            > span {
                font-size: 18px;
                animation: rainbow 20s alternate infinite forwards;
            }
        }

    }

</style>