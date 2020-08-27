<template>
    <Layout class-prefix="layout">
        <Calendar/>
        <Swiper2/>

    </Layout>

</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    import Calendar from '@/components/Calendar/Calendar.vue';
    import Swiper2 from '@/components/Calendar/Swiper.vue';

    @Component({
        components: { Swiper2,  Calendar }
    })
    export default class Record extends Vue {

    }
</script>

<style lang="scss" scoped>

</style>