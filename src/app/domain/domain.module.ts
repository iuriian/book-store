import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../../environments/environment';
import * as fromBook from './store/reducers';

@NgModule({
  imports: [
    StoreModule.forRoot({ books: fromBook.reducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ]
})
export class DomainModule { }
