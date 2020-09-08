<template>
    <div class="calendar">
        <div class="title">
            {{time.year}}年
            {{formatDate(time.month +1)}}月
            {{formatDate(time.day)}}日
        </div>
        <div class="week">
            <span :key="index" class="dayOfWeek" v-for="(day,index) in week">{{"周"+day}}</span>
        </div>
<!--        <Swiperwrap/>
       <div class="month">
                <span :class="[
                        {'month-class': isCurrentMonth(getDateHtml(day.year, day.month, day.day) )},
                        {'todayBg': isCurrentDay(getDateHtml(day.year, day.month, day.day))},
                        {selected:day.year+'-'+ (day.month+1) +'-'+day.day===selectedDate}
                    ]"
                      :key="index"
                      @click="handleClickDay(day)"
                      v-for="(day,index) in calendarArr">
                    {{formatDate(day.day)}}
                </span>
        </div>-->

    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    import helper from '@/components/Record/Calendar/helper';
    @Component
    export default class Calendar extends Vue {

        week: string[] = [
            '日',
            '一',
            '二',
            '三',
            '四',
            '五',
            '六'
        ];

        //拿到现在时间
        time: { year: number; month: number; day: number } = helper.getNewDate(new Date());
        monthDayNum: number = 42 | 35;

        //当前月第一天是周几
        currentFirstDay = helper.getDate(this.time.year, this.time.month, 1);
        weekDay: number = this.currentFirstDay.getDay();
        startTime = this.currentFirstDay.getDate() - (this.weekDay);

        //日历数组
        calendarArr: Array<object> = [];
        
        //选中日期
/*        selectedDate = this.time.year + '-' + (this.time.month + 1) + '-' + this.time.day;*/


        mounted() {
            if (this.weekDay === 5 || this.weekDay === 6 || this.weekDay === 7) {
                this.monthDayNum = 42;
            } else {
                this.monthDayNum = 35;
            }
            for (let i = 0; i < this.monthDayNum; i++) {
                this.calendarArr.push({
                    year: this.time.year,
                    month: this.time.month,
                    day: this.startTime + i,
                });
            }
        }
/*
        // 是否是当前月
        isCurrentMonth(date: Date) {
            const { year: currentYear, month: currentMonth } =
                helper.getNewDate(helper.getDate(this.time.year, this.time.month, 1));
            const { year, month } = helper.getNewDate(date);
            return currentYear === year && currentMonth === month;
        }

        // 是否是今天
        isCurrentDay(date: Date) {
            const { year: currentYear, month: currentMonth, day: currentDay } =
                helper.getNewDate(helper.getDate(this.time.year, this.time.month, this.time.day));
            const { year, month, day } = helper.getNewDate(date);
            return currentYear === year && currentMonth === month && currentDay === day;
        }

        // 上一个月
        prevMonth() {
            const prevMonth = helper.getDate(this.time.year, this.time.month, 1);
            prevMonth.setMonth(prevMonth.getMonth() - 1);
            this.time = helper.getNewDate(prevMonth);
            this.$emit('prevMonth');
        }

        // 下一个月
        nextMonth() {
            const nextMonth = helper.getDate(this.time.year, this.time.month, 1);
            nextMonth.setMonth(nextMonth.getMonth() + 1);
            this.time = helper.getNewDate(nextMonth);
            this.$emit('nextMonth');
        }

        handleClickDay(day: { year: number; month: number; day: number }) {
            // this.$forceUpdate();
            // this.$emit('handleClickDay', day);
            // this.$set(day, 'clickDay', true);
            this.selectedDate = day.year + '-' + (day.month + 1) + '-' + day.day;
        }
        getDateHtml = (year: number, month: number, day: number) => {
            return new Date(year, month, day);
        };

        //监听手指开始滑动事件
                touchStart(event) {
                    this.$emit('touchstart', event)

                    this.touchStartX = event.touches[0].clientX
                    this.touchStartY = event.touches[0].clientY
                    this.touch = {
                        x: 0,
                        y: 0
                    }

                }*/
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
                date = this.time.month + 1 + '月';
            } else if (date > this.currentMonthMaxDay()) {
                if (date - this.currentMonthMaxDay() === 1) {
                    date = this.time.month + 2 + '月';
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