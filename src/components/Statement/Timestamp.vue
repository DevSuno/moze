<template>
    <div class="timestamp">
        <span class="prevMonth"> &lt; </span>
        <span class="timestampContent">

            {{1-1-1}}

        </span>
        <span class="nextMonth"> &gt; </span>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';

    @Component
    export default class Timestamp extends Vue {

    }
</script>

<style lang="scss" scoped>
    .timestamp {
        margin: 15px 0;
        display: flex;
        justify-content: center;
        > .prevMonth {
            margin: 0 20px;
        }
        > .timestampContent{
            text-align: center;
        }
        > .nextMonth {
            margin: 0 20px
        }
    }

</style>