export interface IItem {
    id: number;
    title: string;
    author: string;
    views: number;
    likes: number;
    comments: number;
}

export interface IData {
    items: IItem[]
    pages: number[]
    lastPage: number[]
}