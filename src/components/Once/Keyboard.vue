<template>
    <div class="keyboard">
        <div class="title">
            <span></span>
            <span>Moze安全键盘</span>
            <span @click="offKeyboard">↓</span>
        </div>
        <div class="key">
            <div @click="inputContent"
                 class="number">
                <button :key="button.text"
                        v-for="button in buttonArr">
                    {{button.text}}
                </button>
            </div>
            <div class="function">
                <div :key="name.name"
                     @click="matching(name.name)"
                     class="icon-warp"
                     v-for="name in keyboardIconArr">
                    <Icon :name="name.name"
                          class="icon">
                    </Icon>
                </div>
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
            this.eventBus.$on('initOutput', (output: string) => {
                this.output = output;
            });
        }

        inputContent(event: MouseEvent) {
            const button = (event.target as HTMLButtonElement);
            const input = button.textContent!.trim();
            if (this.output.length === 10) {
                return;
            }
            if (this.output === '0') {
                if ('0123456789'.indexOf(input) >= 0) {
                    this.output = input;
                    this.updateOutput();
                } else {
                    this.output += input;
                    this.updateOutput();
                }
                return;
            }
            if (this.output.indexOf('.') >= 0 && input === '.') {
                return;
            }
            this.output+=input;
            this.updateOutput();
        }

        matching(name: string) {
            if (name === 'backspace') {
                this.remove();
            }
            if (name === 'empty') {
                this.clear()
            }
            if (name === 'true') {
                this.ok()
            }
        }

        remove() {
            if (this.output.length === 1) {
                this.output = '0';
                this.updateOutput();
            } else {
                this.output = this.output.slice(0, -1);
                this.updateOutput();
            }
        }

        clear() {
            this.output = '0';
            this.updateOutput();
        }

        ok() {
            this.updateOutput();
            this.$emit('update')
            this.output=''
        }

        updateOutput() {
            this.eventBus.$emit('updateOutput', this.output);

        }

        offKeyboard() {
            this.$emit('updateOffKeyboard', this.offkeyboard);
        }


    }
</script>

<style lang="scss" scoped>
    @import "Keyboard";
</style>