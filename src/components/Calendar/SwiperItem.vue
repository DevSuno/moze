<template>

        <div class="month">
            {{formatDate(date.month)}}
                <span :class="[
                    ]"
                      :key="index"
                      v-for="(day,index) in calendarArr">
                    {{formatDate(day.day)}}
                </span>
        </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component, Prop } from 'vue-property-decorator';
    import helper from '@/components/Calendar/helper';


    @Component
    export default class SwiperItem extends Vue {
        @Prop() date: object

        get dateObject() {
            const date = new Date(this.date.year, this.date.month, 1);
            return  {
                year: date.getFullYear(),
                month: date.getMonth() + 1,
                day: date.getDate()
            }
        }

        week: string[] = [
            '日',
            '一',
            '二',
            '三',
            '四',
            '五',
            '六'
        ];

        //日历数组


        //time: { year: number; month: number; day: number } = helper.getNewDate(new Date());


        get currentFirstDay () {
            return helper.getDate(this.dateObject.year, this.dateObject.month, 1);
        }
        get weekDay() {
            return this.currentFirstDay.getDay();
        }

        get startTime() {
            return this.currentFirstDay.getDate() - (this.weekDay);
        }

        get monthDayNum() {
            return (this.weekDay === 5 || this.weekDay === 6 || this.weekDay === 7) ? 42: 35;
        }
        get calendarArr() {
            const arr = [];
            for (let i = 0; i < this.monthDayNum; i++) {
                arr.push({
                    year: this.dateObject.year,
                    month: this.dateObject.month,
                    day: this.startTime + i,
                });
            }
            return arr;
        }

        currentMonthMaxDay = () => {
            const date = new Date();
            return new Date(date.getFullYear(), date.getMonth(), 0).getDate();
        };

        prevMonthEndDay = () => {
            const date = new Date();
            const currentMonthLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
            const end = new Date(
                new Date().getFullYear(), new Date().getMonth() - 1, currentMonthLastDay
            );
            return end.getDate();
        };

        formatDate = (date: number | string) => {
            date = Number(date);
            if (date < 0) {
                date = this.prevMonthEndDay() + date;
            } else if (date === 0) {
                date = this.prevMonthEndDay();
            } else if (date === 1) {
                date = this.dateObject.month + 1 + '月';
            } else if (date > this.currentMonthMaxDay()) {
                if (date - this.currentMonthMaxDay() === 1) {
                    date = this.dateObject.month + 2 + '月';
                } else {
                    date = date - this.currentMonthMaxDay();
                }
            }
            return date < 10 ? `0${date}` : date;
        };
    }
</script>

<style lang="scss" scoped>
    @import "Calendar";
</style>