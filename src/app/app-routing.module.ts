import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewuserComponent } from './newuser/newuser.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"login", component:LoginComponent},
  {path:"newuser", component:NewuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
