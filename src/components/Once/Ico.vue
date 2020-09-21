<template>
    <div>
        <div :key="pay.name"
             class="pay"
             v-for="pay in payArr"
             v-show="tab === '支出'">
            <Icon :name="pay.name"></Icon>
            <span>{{pay.text}}</span>
        </div>

        <div :key="earning.name"
             class="earning"
             v-for="earning in earningArr"
             v-show="tab === '收入'">
            <Icon :name="earning.name"></Icon>
            <span>{{earning.text}}</span>
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

        created() {
            this.eventBus.$on('updateSelectedTab', (tab: string) => {
                this.tab = tab;
            });
        }

    }
</script>

<style lang="scss" scoped>

</style>