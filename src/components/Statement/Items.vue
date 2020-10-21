<template>
    <div class="items">
        <div :class="[{selected: isClick(index)}]" :key="item"
             @click="changeSelected(index)"
             class="item"
             v-for="(item, index) in items">
            {{item}}
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component, Inject } from 'vue-property-decorator';
    import index from '@/store';

    @Component
    export default class Items extends Vue {
        @Inject() eventBus!: Vue;

        selected = '总览';

        items: string[] = ['总览', '明细', '类别', '排行'];

        isClick(index: number) {

            return this.selected === this.items[index];
        }
        //改变选中的样式，更新 index
        changeSelected(index: number) {
            this.selected = this.items[index];

            console.log('点击了', index)
            this.eventBus.$emit('updateIndex', index)
        }
        mounted(){
            this.eventBus.$on('changeIndex',(index: number)=>{
                this.selected = this.items[index]
/*                console.log(index);
                console.log(this.selected);*/
            })
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";

    .items {
        margin: 20px 0 20px 0;
        display: flex;
        flex-direction: row;

        > .item {
            width: 25%;
            text-align: center;
            position: relative;

            &.selected::after {
                position: absolute;
                content: ' ';
                width: 50%;
                height: 2px;
                left: 25%;
                bottom: -10px;
                background: $color-blueselected;
            }
        }

    }

</style>