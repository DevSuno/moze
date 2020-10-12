<template>
    <Layout class-prefix="layout">
        <Topbar/>
        <Items/>
        <Swiper2/>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    import Topbar from '@/components/Statement/Topbar.vue';
    import Timestamp from '@/components/Statement/Timestamp.vue';
    import Items from '@/components/Statement/Items.vue';
    import Swiper2 from '@/components/Statement/Swiper/Swiper.vue'
    @Component({
        components: { Swiper2,  Items, Timestamp, Topbar }
    })
    export default class Statement extends Vue {

    }
</script>

<style lang="scss" scoped>

</style>