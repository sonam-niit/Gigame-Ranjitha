import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { bookReducer } from './state/book.reducer';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({books:bookReducer})
    //my state and actions provided to all my root components
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
