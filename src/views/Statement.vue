<template>
    <Layout class-prefix="layout">
        <Topbar/>
        <Timestamp/>
        <Items/>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    import Topbar from '@/components/Statement/Topbar.vue';
    import Timestamp from '@/components/Statement/Timestamp.vue';
    import Items from '@/components/Statement/Items.vue';

    @Component({
        components: {  Items, Timestamp, Topbar }
    })
    export default class Statement extends Vue {

    }
</script>

<style lang="scss" scoped>

</style>