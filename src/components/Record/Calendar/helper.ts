const getNewDate = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    return { year, month, day };
};

const getDate = (year: number, month: number, day: number) => {
    return new Date(year, month, day);
};



const week: string[] = [
    '日',
    '一',
    '二',
    '三',
    '四',
    '五',
    '六'
];
const chineseMonthList: string[] = [
    '一月',
    '二月',
    '三月',
    '四月',
    '五月',
    '六月',
    '七月',
    '八月',
    '九月',
    '十月',
    '十一月',
    '十二月'
];
const chineseMonth = (month: number) => {
    let chineseMonth;

    chineseMonthList.map(() => {
        chineseMonth = chineseMonthList[month];
    });
    return chineseMonth;
};
export default {
    getNewDate,
    getDate,
    chineseMonth,
    week,
};