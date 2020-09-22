<template>
    <div class="message">
        <div class="money">
            <div @click="showKeyboard" class="number">{{output}}</div>
        </div>

        <div class="onceTime">
            <div class="date">年月日</div>
            <div class="time">时分</div>
        </div>

        <div class="note">
            <span class="text">#备注 /</span>
            <label>
                <input class="content" placeholder="在这里输入备注">
            </label>

        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component, Inject } from 'vue-property-decorator';

    @Component
    export default class Message extends Vue {
        @Inject() eventBus!: Vue;
        output = '元';
        isShowKeyboard = false;

        mounted() {
            this.eventBus.$emit('updateOutput', this.output);
        }

        showKeyboard() {
            this.isShowKeyboard = true;
            this.$emit('updateIsShowKeyboard', this.isShowKeyboard);

        }

        inputContent(event: MouseEvent) {
            const button = (event.target as HTMLButtonElement);
            const input = button.textContent!;
            if (this.output.length === 16) {
                return;
            }
            if (this.output === '0') {
                if ('0123456789'.indexOf(input) >= 0) {
                    this.output = input;
                } else {
                    this.output += input;
                }
                return;
            }
            if (this.output.indexOf('.') >= 0 && input === '.') {
                return;
            }
            this.output += input;
        }

    }
</script>

<style lang="scss" scoped>
    @import "src/assets/style/helper.scss";


    .message {
        margin-top: 20px;
        display: flex;
        flex-direction: column;

        .money {
            display: flex;
            flex-direction: row-reverse;
            margin-right: 20px;


            .number {
                border: 1px solid $color-normal;
                border-radius: 8px;
                width: 39.5vw;
                font-size: 18px;
                margin: 4px 0;
                text-align: right;
                padding: 0px 10px;
                color: $color-blueselected;
            }

        }


        .onceTime {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            margin: 10px 0;

            .date {
                width: 40vw;
                padding: 5px 0;
                border: 1px solid $color-normal;
                border-radius: 8px;
                text-align: center;
            }

            .time {
                width: 40vw;
                padding: 5px 0;
                border: 1px solid $color-normal;
                border-radius: 8px;
                text-align: center;
            }
        }

        .note {
            display: flex;
            flex-direction: column;

            .text {
                padding-left: 20px;
            }

            label {
                margin-top: 10px;
                display: flex;
                align-items: center;

                .content {
                    width: 90vw;
                    margin: 0 auto;
                    padding: 30px 20px;
                    color: $color-blueselected;
                    font-size: 18px;
                    text-align: left;
                    border: 1px solid $color-normal;
                    border-radius: 10px;
                }
            }
        }
    }
</style>