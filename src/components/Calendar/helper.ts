const getNewDate = (date: any) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    return { year, month, day };
};

const getDate = (year: number, month: number, day: number) => {
    return new Date(year, month, day);
};

const formatDate = (date: any) => {
    date = Number(date);
    return date < 10 ? `0${date}` : date;
};

export {
    getNewDate,
    getDate,
    formatDate
};