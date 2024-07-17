import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SomecompComponent } from './somecomp/somecomp.component';
import { PrevUrlService } from './prev-url.service';
import { MY_STRING_TOKEN } from './token';
import { InjectComponent } from './inject/inject.component';

@NgModule({
  declarations: [
    AppComponent,
    SomecompComponent,
    InjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PrevUrlService, 
    { provide: MY_STRING_TOKEN, useValue: 'Welcome to the world '}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
