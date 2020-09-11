<template>
    <div>

        <div :key="index"
             v-for="(page,index) in pages">
            {{page.value}}
        </div>
    </div>

</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';

    @Component
    export default class SwiperItem extends Vue {
        pages: [{}, {}, {}] = [
            { 0: 0 },
            { 1: 1 },
            { 2: 2 }
        ];
    }
</script>

<style lang="scss" scoped>

</style>