<template>
    <div class="">
        <div class="echarts"></div>
        <div class="content">
            <p v-for="( sum, index ) in this.data.outputRecordList" :key="index">
                {{sum.selectedDate}}
                {{sum.output + '元'}}
                {{sum.selectedTag}}
                {{sum.note}}
            </p>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component, Prop } from 'vue-property-decorator';

    @Component
    export default class OutputRecordList extends Vue {
        @Prop() data!: {};
        mounted(){
            console.log(this.data);
        }
    }
</script>

<style lang="scss" scoped>

</style>