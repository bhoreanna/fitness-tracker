import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }


  UserFilter(query: string) {
    console.log('Search User query',query);
  }




  onUserCreate(){
    console.log('On  Create User ');

  }



  RoleFilter(query: string) {
    console.log('Search Role query',query);
  }




  onRoleCreate(){
    console.log('On  Create Role ');

  }



  
  ModuleFilter(query: string) {
    console.log('Search module query',query);
  }




  onModuleCreate(){
    console.log('On  Create Module ');

  }


  ScreenFilter(query: string) {
    console.log('Search Screen query',query);
  }




  onScreenCreate(){
    console.log('On  Create Role ');

  }
}
