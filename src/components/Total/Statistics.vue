<template>
    <div class="statistics">
        <div class="content">
            <span class="text"><Icon name="directory"/> 每周 </span>
            <span class="placeholder"></span>
        </div>

        <div class="chart">图表</div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';

    @Component
    export default class Statistics extends Vue {

    }
</script>

<style lang="scss" scoped>
.statistics {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    > .content {
        display: flex;
        justify-content: space-around;
        align-items: center;
        > .text {
            display: flex;
            flex-direction: row;
            align-items: center;
            text-align: center;
            > .icon {
                margin-right: 5px;
            }
        }
        > .chart {

        }

    }

}

</style>