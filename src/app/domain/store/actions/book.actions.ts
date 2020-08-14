import { createAction, props } from '@ngrx/store';

import { Book } from '@/domain/models/book';

export enum ActionTypes {
  Add = '[Book Page] Add book',
}

export const addBook = createAction(
  ActionTypes.Add,
  props<Book>()
);
