<template>
    <div class="topbar">
        <router-link to="/record">
            <Icon class="icon" name="back"></Icon>
        </router-link>
        <span class="text">新增记录</span>
        <Icon @click="ok" class="icon" name="true"></Icon>

    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';

    @Component
    export default class Topbar extends Vue {

        ok() {
            this.$emit('update');
        }
    }
</script>

<style lang="scss" scoped>
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

        > .text {
            font-size: 18px;
            animation: rainbow 20s alternate infinite forwards;
            @keyframes rainbow {
                @for $i from 0 through 20 {
                    #{percentage($i * 0.05)} {
                        color: hsl(random(360%), 75, 75);
                    }
                }
            }

        }

    }

</style>