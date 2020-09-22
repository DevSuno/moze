<template>
    <div class="keyboard">
        <div class="title">
            <span></span>
            <span>Moze安全键盘</span>
            ↓
        </div>
        <div class="key">
            <div class="number">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>.</button>
                <button>0</button>
                <button>00</button>
            </div>
            <div class="function">
                <div>
                    <Icon name="back" class="Icon"></Icon>
                </div>
                <div>
                    <Icon name="empty" class="Icon"></Icon>
                </div>
                <div class="ok">
                    <Icon  name="true" class="Icon"></Icon>
                </div>
            </div>

        </div>

    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';

    @Component
    export default class Keyboard extends Vue {

    }
</script>

<style lang="scss" scoped>
    @import "src/assets/style/helper";

    button {
        width: 25vw;
        height: 42px;
        background: darken($bg, 5%);
        border: 0.3px solid $color-normal;
        mso-border-shadow: no;
        color: #ffffff;

    }

    .keyboard {
        position: absolute;
        bottom: 50px;
        display: flex;
        flex-direction: column;
        background: darken($bg, 5%);
        font-family: Consolas, monospace;
        font-size: 28px;

        .title {
            margin: 10px 0;
            display: flex;
            justify-content: space-around;
            font-size: 20px;
        }

        .key {
            display: flex;
            flex-direction: row;

            .number {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                max-width: 75vw;

                button {
                    margin: -0.5px 0 -0.5px -0.5px;

                }

            }

            .function {
                min-width: 25vw;
                display: flex;
                flex-direction: column;
                div {
                    width: 25.6vw;

                    height: 42px;

                    border: 0.3px solid $color-normal;
                }
                .Icon {
                    margin: 0 auto;
                    position: relative;
                    left: 35%;
                    top: 10%;
                }

                .ok {
                    height: 84px;
                    .Icon {
                        top: 30%;

                    }
                }

            }
        }
    }
</style>