import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { DetailsComponent } from './details/details.component';
import { ChildAComponent } from './dashboard/child-a/child-a.component';
import { ChildBComponent } from './dashboard/child-b/child-b.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { EventsComponent } from './session4/events/events.component';
import { LoginformComponent } from './session4/loginform/loginform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterformComponent } from './session4/registerform/registerform.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProductsComponent,
    DetailsComponent,
    ChildAComponent,
    ChildBComponent,
    DashboardComponent,
    LifecycleComponent,
    EventsComponent,
    LoginformComponent,
    RegisterformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
