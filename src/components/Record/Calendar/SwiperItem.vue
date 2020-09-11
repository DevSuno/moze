<template>
    <div class="month">
        <span :class="[
                        {'month-class': isCurrentMonth(getDateHtml(day.year, day.month, day.day) )},
                        {'todayBg': isCurrentDay(getDateHtml(day.year, day.month, day.day))},
                        {selected:day.year+'-'+ (day.month+1) +'-'+day.day === selectedDate}
                    ]"
              @click="handleClickDay(day)"
              :key="index"
              v-for="(day,index) in calendarArr">
                    {{formatDate(day.day)}}
                </span>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component, Prop } from 'vue-property-decorator';
    import helper from '@/components/Record/Calendar/helper';

    @Component
    export default class SwiperItem extends Vue {
        @Prop() date!: { year: number; month: number; day: number };

        //选中日期
        selectedDate = this.date.year + '-' + (this.date.month + 1) + '-' + this.date.day;
        get dateObject() {
            const date = new Date(this.date.year, this.date.month, 1);
            return {
                year: date.getFullYear(),
                month: date.getMonth(),
                day: date.getDate()
            };
        }

        get currentFirstDay() {
            return helper.getDate(this.dateObject.year, this.dateObject.month, 1);
        }

        get weekDay() {
            return this.currentFirstDay.getDay();
        }

        get startTime() {
            return this.currentFirstDay.getDate() - (this.weekDay);
        }

        get monthDayNum() {
            return (this.weekDay === 5 || this.weekDay === 6 || this.weekDay === 7) ? 42 : 35;
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
            const date = this.date;
            return new Date(date.year, date.month + 1, 0).getDate();
        };

        prevMonthEndDay = () => {
            const date = this.date;
            const currentMonthLastDay = new Date(date.year, date.month + 1, 0).getDate();
            const end = new Date(
                date.year, date.month, currentMonthLastDay
            );
            return end.getDate();
        };

        getDateHtml = (year: number, month: number, day: number) => {
            return new Date(year, month, day);
        };

        formatDate = (date: number | string) => {
            date = Number(date);
            if (date < 0) {
                date = this.prevMonthEndDay() + date;
            } else if (date === 0) {
                date = this.prevMonthEndDay();
            } else if (date === 1) {
                date = this.dateObject.month + 1  + '月';
            } else if (date > this.currentMonthMaxDay()) {
                if (date - this.currentMonthMaxDay() === 1) {
                    date = (this.dateObject.month + 2)  + '月';
                } else {
                    date = date - this.currentMonthMaxDay();
                }
            }
            return date < 10 ? `0${date}` : date;
        };

        // 是否是本月
        isCurrentMonth(date: Date) {
            const { year: currentYear, month: currentMonth } =
                helper.getNewDate(helper.getDate(this.date.year, this.date.month, 1));
            const { year, month } = helper.getNewDate(date);

            return currentYear === year && currentMonth === month;
        }

        // 是否是今天
        isCurrentDay(date: Date) {
            const { year: currentYear, month: currentMonth, day: currentDay } =
                helper.getNewDate(helper.getDate(this.date.year, this.date.month, this.date.day));
            const { year, month, day } = helper.getNewDate(date);
            return currentYear === year && currentMonth === month && currentDay === day;
        }
        // 操作点击日期
        handleClickDay(day: {year: number; month: number; day: number}) {
            this.selectedDate = day.year+'-'+ (day.month+1) +'-'+day.day
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";

    .month {
        display: flex;
        max-width: 100vw;
        min-width: 14.2857%;
        justify-content: space-between;
        flex-wrap: wrap;

        > span {
            max-height: 30px;
            min-width: 30px;
            margin: 3px 10px;
            font-size: 12px;
            color: $color-gray;
            text-align: center;
            line-height: 30px;
            position: relative;

            &:nth-child(7n).month-class {
                color: $color-graygreen;
            }

            &:nth-child(7n-6).month-class {
                color: $color-grayred;
            }

            &.selected::before {
                position: absolute;
                content: ' ';
                width: 30px;
                height: 30px;
                left: -3.5px;
                top: -3.5px;
                border: $color-blueborder;
                border-radius: 50%;
            }
        }

        > .month-class {
            color: $color-normal;
        }

        > .todayBg {
            background: $todayBg;
            border-radius: 50%;

        }
    }

</style>