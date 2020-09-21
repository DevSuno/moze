<template>
    <div>
        <div :key="pay" class="pay" v-for="pay in payArr">
            <Icon :name="pay.name"></Icon>
            <span>{{pay.text}}</span>
        </div>
        --
        <div :key="earning" class="earning" v-for="earning in earningArr">
            <Icon :name="earning.name"></Icon>
            <span>{{earning.text}}</span>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component, Prop } from 'vue-property-decorator';

    @Component
    export default class Ico extends Vue {
        @Prop() payArr!: [{}];
        @Prop() earningArr!: [{}];

    }
</script>

<style lang="scss" scoped>

</style>