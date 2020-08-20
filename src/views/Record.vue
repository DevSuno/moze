<template>
    <Layout class-prefix="layout">
        <Calendar/>
    </Layout>

</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    import Calendar from '@/components/Calendar/Calendar.vue';

    @Component({
        components: { Calendar }
    })
    export default class Record extends Vue {

    }
</script>

<style lang="scss" scoped>

</style>