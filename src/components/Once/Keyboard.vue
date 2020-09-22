<template>
    <div class="keyboard">
        <div class="title">
            <span></span>
            <span>Moze安全键盘</span>
            <span @click="offKeyboard">↓</span>
        </div>
        <div class="key">
            <div @click="inputContent" class="number">
                <button :key="button.text" v-for="button in buttonArr">{{button.text}}</button>
            </div>
            <div class="function">
                <div :key="name.name" class="icon-warp" v-for="name in keyboardIconArr">
                    <Icon :name="name.name" class="icon"></Icon>
                </div>
                <!--            <div>
                                    <Icon class="Icon" name="back"></Icon>
                                </div>
                                <div>
                                    <Icon class="Icon" name="empty"></Icon>
                                </div>
                                <div class="ok">
                                    <Icon class="Icon" name="true"></Icon>
                                </div>-->
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component, Inject, Prop } from 'vue-property-decorator';

    @Component
    export default class Keyboard extends Vue {
        @Inject() eventBus!: Vue;
        @Prop() keyboardIconArr!: [{}];
        @Prop() buttonArr!: [{}];

        output = '';
        offkeyboard = false;

        created() {
            this.eventBus.$on('updateOutput', (output: string) => {
                this.output = output;
            });
        }

        inputContent() {
            return;
        }

        offKeyboard() {
            this.$emit('updateOffKeyboard', this.offkeyboard);
        }

        remove() {
            if (this.output.length === 1) {
                this.output = '0';
            } else {
                this.output = this.output.slice(0, -1);
            }
        }

        clear() {
            this.output = '0';
        }

        ok() {
            const number = parseFloat(this.output);
            this.$emit('update:value', number);
            this.$emit('submit', number);
            this.output = '0';
        }
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
        max-width: 100%;
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

                .icon-warp {
                    width: 25.6vw;
                    height: 42px;
                    border: 0.3px solid $color-normal;

                    .icon {
                        position: relative;
                        left: 35%;
                        top: -58%;
                    }
                }

                :last-child {
                    min-height: 84px;

                    .icon {
                        top: 0;

                    }
                }

            }
        }
    }
</style>