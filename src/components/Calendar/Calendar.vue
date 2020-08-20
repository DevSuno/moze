<template>
    <div class="calendar">
        <div class="title">{{year}}年{{month}}月{{day}}日</div>
        <div class="week">
            <span :key="index" class="dayOfWeek" v-for="(day,index) in week">{{"周"+day}}</span>
        </div>
        <div class="day">

        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';

    @Component
    export default class Calendar extends Vue {
        week: string[] = ['日', '一', '二', '三', '四', '五', '六'];
        now: any = new Date();
        year: number = this.now.getFullYear();
        month: number = this.now.getMonth() + 1;
        day: number = this.now.getDate();

    }
</script>

<style lang="scss" scoped>
    .calendar {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        > .title {
            font-size: 18px;
            text-align: center;

        }

        > .week {
            margin-top: 20px;
            display: flex;
            justify-content: space-evenly;

            > .dayOfWeek {


            }
        }
    }
</style>