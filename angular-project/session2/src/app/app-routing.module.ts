import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { DetailsComponent } from './details/details.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ChildAComponent } from './dashboard/child-a/child-a.component';
import { ChildBComponent } from './dashboard/child-b/child-b.component';
import { AuthGuard } from './auth.guard';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { EventsComponent } from './session4/events/events.component';
import { LoginformComponent } from './session4/loginform/loginform.component';
import { RegisterformComponent } from './session4/registerform/registerform.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent,},
  {path:'lifecycle',component:LifecycleComponent},
  {path:'events',component:EventsComponent},
  {path:'loginForm',component:LoginformComponent},
  {path:'registerForm',component:RegisterformComponent},
  {path:'products',component:ProductsComponent,canActivate:[AuthGuard]},
  {path:'products/details/:id',component:DetailsComponent,
    canActivate:[AuthGuard]
  },
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'',redirectTo:'child-a',pathMatch:'full'},
    {path:'child-a',component:ChildAComponent},
    {path:'child-b',component:ChildBComponent}
  ],canActivate:[AuthGuard]},
  { path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) }
  //Lazy loading
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
