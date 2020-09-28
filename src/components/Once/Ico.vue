<template>
    <div class="ico">
        <div :key="pay.name"
             class="pay"
             v-for="pay in payArr"
             v-show="tab === '支出'"
             @click="changeSelectedIco(pay.name)">
            <Icon :name="pay.name"></Icon>
            <span class="text"
                  :class="[{selected: pay.name === selectedIco}]">
                {{pay.text}}
            </span>
        </div>

        <div :key="earning.name"
             class="earning"
             v-for="earning in earningArr"
             v-show="tab === '收入'"
             @click="changeSelectedIco(earning.name)">
            <Icon :name="earning.name"></Icon>
            <span class="text"
                  :class="[{selected: earning.name === selectedIco}]">
                {{earning.text}}
            </span>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component, Inject, Prop } from 'vue-property-decorator';

    @Component
    export default class Ico extends Vue {

        @Prop() payArr!: [{}];
        @Prop() earningArr!: [{}];
        @Inject() eventBus!: Vue;

        tab = '';
        selectedIco = 'eat';
        created() {
            this.eventBus.$on('updateSelectedTab', (tab: string) => {
                this.tab = tab;
            });
        }
        mounted(){
            this.eventBus.$on('reset',()=>{
                this.selectedIco = 'eat'
            })
        }
        changeSelectedIco(name: string){
            this.$emit('updateSelectedIco', name)
           return  this.selectedIco = name;

        }

    }
</script>

<style lang="scss" scoped>
    @import "src/assets/style/helper.scss";

    .ico {
        margin-top: 10px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;


        div {
            width: 25vw;
            display: flex;
            flex-direction: column;

            .icon {
                width: 35px;
                height: 35px;
                margin: 12px 20px;
            }

            span {
                color: $color-normal;
                padding-left: 6.2vw;

                &.selected {
                    color: $color;
                }
            }
        }
    }

</style>