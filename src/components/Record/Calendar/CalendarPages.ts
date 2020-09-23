import helper from '@/components/Record/Calendar/helper';

const date: { year: number; month: number; day: number } = helper.getNewDate(new Date());

const CalendarPages: Pages = [

    {
        year: date.year,
        month: date.month - 1,
        day: date.day
    },
    {
        year: date.year,
        month: date.month,
        day: date.day
    },
    {
        year: date.year,
        month: date.month + 1,
        day: date.day
    }

];
export default CalendarPages