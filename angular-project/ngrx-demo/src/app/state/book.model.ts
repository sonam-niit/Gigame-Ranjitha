export interface Book{
    id:number;
    title:string;
    author:string
}
export interface AppState{
    books:Book[]; //global state
}