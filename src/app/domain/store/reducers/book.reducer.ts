import { Action, createReducer, on } from '@ngrx/store';

import { Book } from '@/domain/models/book';
import { addBook } from '../actions';

const books: Book[] = [];

const bookReducer = createReducer(
  books,
  on(addBook, (state, book) => [...state, new Book(book)])
);

export function reducer(state: Book[], action: Action) {
  return bookReducer(state, action);
}
