import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { BooksComponent } from './books.component';

const routes: Routes = [
  {
    path: 'books',
    component: BooksComponent
  }
];

@NgModule({
  declarations: [
    BooksComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  exports: [
    BooksComponent,
    RouterModule
  ]
})
export class BooksModule { }
