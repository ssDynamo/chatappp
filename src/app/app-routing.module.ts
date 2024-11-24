import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { MembersComponent } from './members/members.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
  },
  {
    path:'login',
    component: LoginComponent,
    canActivate:[authGuard]
  }
  ,
  {
    path:'member',
    component:MembersComponent,
  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
