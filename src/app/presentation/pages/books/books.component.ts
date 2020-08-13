import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  public bookForm: FormGroup;

  constructor(
    private builder: FormBuilder
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

}
