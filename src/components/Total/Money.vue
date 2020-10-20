<template>
    <div class="money">
        <div class="title">
            <span class="summed">总 额</span>
            <span class="type">RMB</span>
        </div>
        <div class="money-sum">
            <span class="text">
                金额
            </span>
            <span :class="[ {pay : this.balance < 0},
                            {earning : this.balance >= 0}]"
                  v-if="isSwitch">
                {{"￥" + this.balance}}
            </span>
            <span v-else>
                *****
            </span>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component, Inject } from 'vue-property-decorator';

    @Component
    export default class Money extends Vue {
        @Inject() eventBus!: Vue;
        balance = 0;
        switch = false;

        get isSwitch() {
            return this.switch;
        }
        created() {
            this.eventBus.$on('updateBalance',
                (balance: number) => this.balance = balance);
        }
        mounted(){
            this.eventBus.$on('updateSwitch',
                () => this.switch = !this.switch);
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/style/helper.scss";

    .money {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 20px;

        > .title {
            display: flex;
            flex-direction: column;
            padding-left: 60px;
            padding-right: 20px;
        }

        > .money-sum {
            font-size: 30px;

            .pay {
                color: $color-lightred;
            }

            .earning {
                color: $color-lightgreen;

            }
        }
    }
</style>