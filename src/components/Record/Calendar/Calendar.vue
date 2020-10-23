<template>
    <div class="calendar">
        <div class="rainbow">
            <span>{{getTime[0]}}</span>
            <span>年</span>
            <span>{{formatDate(getTime[1])}}</span>
            <span>月</span>
            <span>{{formatDay(getTime[2])}}</span>
            <span>日</span>
        </div>
        <div class="week">
            <span :key="index" class="dayOfWeek" v-for="(day,index) in week">{{"周"+day}}</span>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component, Watch } from 'vue-property-decorator';
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
        // 拿到选中的时间

        get getTime (){
            return (this.$store.state.selectedDate).split("-")
        }

        //拿到现在时间
        time: { year: number; month: number; day: number } = helper.getNewDate(new Date());
        monthDayNum: number = 42 | 35;

        //当前月第一天是周几
        currentFirstDay = helper.getDate(this.time.year, this.time.month, 1);
        weekDay: number = this.currentFirstDay.getDay();
        startTime = this.currentFirstDay.getDate() - (this.weekDay);

        //日历数组
        calendarArr: Array<object> = [];


        mounted() {
            console.log(this.getTime);
            this.rainbow()
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
        rainbow(){
            const letters = (document.querySelectorAll('.rainbow span') as any);
            letters.forEach((span: { style: { animationDelay: string } }, i: number) => {
                span.style.animationDelay = `${-20 + i * 0.2}s`;
            });
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
        formatDay(date: number | string){
            date = Number(date);
            return date < 10 ? `0${date}` : date;
        }

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