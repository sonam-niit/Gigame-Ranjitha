import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UserlistComponent } from './users/userlist/userlist.component';
import { UserService } from './services/user.service';
import { UserformComponent } from './users/userform/userform.component';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    UserformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
