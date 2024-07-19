import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Book } from "./book.model";

export const selectBooks= createFeatureSelector<Book[]>('books');

export const selectBookList= createSelector(
    selectBooks,
    (books:Book[])=>books
)