import { createReducer, on } from "@ngrx/store";
import { Book } from "./book.model";
import { addBook, removeBook } from "./book.actions";

export const initialState:Book[]=[];

const _bookReducer= createReducer(
    initialState,
    on(addBook,(state,{book})=>[...state,book]),
    on(removeBook,(state,{bookId})=>state.filter(book=>book.id!=bookId))
)
export function bookReducer(state:any,action:any){
    return _bookReducer(state,action);
}