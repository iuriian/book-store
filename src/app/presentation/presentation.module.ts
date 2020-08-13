import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from './pages/pages.module';

@NgModule({
  imports: [
    PagesModule
  ],
  exports: [
    PagesModule
  ]
})
export class PresentationModule { }
