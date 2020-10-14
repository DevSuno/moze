type RootState = {
    date: { year: number; month: number; day: number };
}

type Date = {
    year: number;
    month: number;
    day: number;
}

type Pages = [
    { year: number; month: number; day: number },
    { year: number; month: number; day: number },
    { year: number; month: number; day: number }
]
type recordList = [
    {
    recordItem: recordItem[];
    createdAt: string;
    id: string;
    }
]

type recordItem = {
    selectedTag: string;
    selectedIco: string;
    selectedText: string;
    selectedDate: string;
    currentTime: string;
    output: string;
    note: string;
}