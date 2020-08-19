<template>
    <div class="type">

        <span class="balance"><span class="balance-yuan"></span>余额</span>
        <span class="pay"><span class="pay-yuan"></span>支出</span>
        <span class="earning"> <span class="earning-yuan"></span>收入</span>

    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';

    @Component
    export default class Type extends Vue {

    }
</script>

<style lang="scss" scoped>
    .type {
        margin-top: 5px;
        font-size: 10px;
        color: #95949f;
        text-align: center;

        > .balance {
            margin-left: 20px;
            margin-right: 5px;
            position: relative;

            > .balance-yuan {
                position: absolute;
                content: " ";
                display: inline;
                width: 5px;
                height: 5px;
                border-radius: 50%;
                top: 5px;
                left: -10px;
                background: #a4789f;
            }
        }

        > .pay {
            margin-left: 20px;
            margin-right: 5px;
            position: relative;

            > .pay-yuan {
                position: absolute;
                content: " ";
                display: inline;
                width: 5px;
                height: 5px;
                border-radius: 50%;
                top: 5px;
                left: -10px;
                background: #ea5e69;
            }
        }

        > .earning {
            margin-left: 20px;
            margin-right: 5px;
            position: relative;

            > .earning-yuan {
                position: absolute;
                content: " ";
                display: inline;
                width: 5px;
                height: 5px;
                border-radius: 50%;
                top: 5px;
                left: -10px;
                background: #a1d268;
            }
        }
    }
</style>