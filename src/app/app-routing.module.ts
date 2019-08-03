import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingComponent } from './training/training/training.component';
import { ModuleMasterComponent } from './module-master/module-master.component';
import { ScreenMasterComponent } from './screen-master/screen-master.component';
import { RoleMasterComponent } from './role-master/role-master.component';
import { UserMasterComponent } from './user-master/user-master.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AuthGuardService } from './shared/guards/auth-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'home',component:HomeComponent , canActivate: [AuthGuardService],
    children: [
    
      {
        path:'module-master',component:ModuleMasterComponent ,  canActivate: [AuthGuardService]
      },
      {
        path:'screen-master',component:ScreenMasterComponent ,  canActivate: [AuthGuardService]
      },
      {
        path:'role-master',component:RoleMasterComponent ,  canActivate: [AuthGuardService]
      },
      {
        path:'user-master',component:UserMasterComponent ,  canActivate: [AuthGuardService]
      },
    
      {
        path:'admin-dashboard',component:AdminDashboardComponent  ,  canActivate: [AuthGuardService]
      },

      {
        path:'dashboard',component:DashboardComponent  ,  canActivate: [AuthGuardService]
      },
    ]},

];







@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
