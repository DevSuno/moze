<template>
    <div class="message">
        <div class="money">
            <div @click="showKeyboard" class="number">{{(output || 0)+ '元'}}</div>
        </div>

        <div class="onceTime">
            <router-link to="/record">
                <div class="date">{{selectedDate}}</div>
            </router-link>
            <div class="time">{{currentTime}}</div>
        </div>

        <div class="note">
            <span class="text">#备注 /</span>
            <label>
                <input class="content" placeholder="在这里输入备注"
                v-model="note"
                >
            </label>

        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component, Inject, Watch } from 'vue-property-decorator';

    @Component
    export default class Message extends Vue {
        @Inject() eventBus!: Vue;
        output = '';
        isShowKeyboard = false;
        note = '';

        @Watch ('note')
        watchNote(value: string){
            this.$emit('updateNote',this.note)
        }

        get selectedDate() {
            return this.$store.state.selectedDate;
        }

        get currentTime() {
            return this.$store.state.currentTime;
        }

        mounted() {
            this.eventBus.$emit('initOutput', this.output);
            this.eventBus.$on('updateOutput', (output: string) => {
                this.output = output;
                this.$emit('updateOutput',output)
            });
        }

        showKeyboard() {
            this.isShowKeyboard = true;
            this.$emit('updateShowKeyboard', this.isShowKeyboard);

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