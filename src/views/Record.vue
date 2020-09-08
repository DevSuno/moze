<template>
    <Layout class-prefix="layout">
        <Calendar/>
        <Swiperwrap/>

    </Layout>

</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    import Calendar from '@/components/Record/Calendar/Calendar.vue';
    import Swiperwrap from '@/components/Record/Calendar/Swiper.vue';

    @Component({
        components: { Swiperwrap,  Calendar }
    })
    export default class Record extends Vue {

    }
</script>

<style lang="scss" scoped>

</style>