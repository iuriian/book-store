import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Store } from '@ngrx/store';

import * as bookActions from '@/domain/store/actions';
import { Book } from '@/domain/models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  public bookForm: FormGroup;

  constructor(
    private builder: FormBuilder,
    private store: Store<Book[]>
  ) {

    this.bookForm = this.createForm();

  }

  ngOnInit(): void {
  }

  public createForm(): FormGroup {
    return this.builder.group({
      title: [null],
      author: [null],
      gender: [null],
      classification: [null],
      description: [null]
    });
  }

  public createBook() {
    this.store.dispatch(bookActions.addBook(this.bookForm.value));
  }

}
