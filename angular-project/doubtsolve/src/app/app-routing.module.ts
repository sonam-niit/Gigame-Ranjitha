import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SomecompComponent } from './somecomp/somecomp.component';

const routes: Routes = [
  {path:'comp',component:SomecompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
