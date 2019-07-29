import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyOwnCustomMaterialModule } from './my-own-custom-material/my-own-custom-material.module';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CurrentTrainingComponent } from './training/current-training/current-training.component';
import { PastTrainingComponent } from './training/past-training/past-training.component';
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { TrainingComponent } from './training/training/training.component';
import { HomeComponent } from './home/home.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { StopTraningComponent } from './training/stop-traning/stop-traning.component';
import { ModuleMasterComponent } from './module-master/module-master.component';
import { ScreenMasterComponent } from './screen-master/screen-master.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserMasterComponent } from './user-master/user-master.component';
import { RoleMasterComponent } from './role-master/role-master.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DynamicMenuComponent } from './dynamic/dynamic-menu/dynamic-menu.component';
import { MenuItemComponent } from './dynamic/menu-item/menu-item.component';
import { HttpIntercepterBasicAuthService } from './http/http-intercepter-basic-auth.service';
import { TreeFlatOverviewExampleComponent } from './tree-flat-overview-example/tree-flat-overview-example.component';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CurrentTrainingComponent,
    PastTrainingComponent,
    NewTrainingComponent,
    TrainingComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    StopTraningComponent,
    ModuleMasterComponent,
    ScreenMasterComponent,
    UserMasterComponent,
    RoleMasterComponent,
    AdminDashboardComponent,
    DynamicMenuComponent,
    MenuItemComponent,
    TreeFlatOverviewExampleComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBasicAuthService, multi: true }

  ],
  bootstrap: [AppComponent],
  entryComponents: [StopTraningComponent]
})
export class AppModule { }
