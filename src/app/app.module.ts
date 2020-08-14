import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PresentationModule } from './presentation/presentation.module';
import { DomainModule } from './domain/domain.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PresentationModule,
    DomainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
