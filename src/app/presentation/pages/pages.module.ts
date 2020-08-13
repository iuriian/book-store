import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';

import { BooksModule } from './books/books.module';

@NgModule({
  imports: [
    BooksModule,
    PagesRoutingModule
  ],
  exports: [
    PagesRoutingModule
  ]
})
export class PagesModule { }
