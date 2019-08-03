import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { VERSION } from '@angular/material';
import { Subscription } from 'rxjs';
import { ModuleMaster } from 'src/app/model/module-master';
import { UserRoleService } from 'src/app/shared/user-role/user-role.service';
import { RoleMaster } from 'src/app/model/role-master';
import { Router } from '@angular/router';

class Tab {
  //name:string;
  //routerpath:string;

  constructor(public name?: string, public routerpath?: string) { }
}

@Component({
  selector: 'app-dynamic-menu',
  templateUrl: './dynamic-menu.component.html',
  styleUrls: ['./dynamic-menu.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class DynamicMenuComponent implements OnInit {
  activeLinkIndex = -1;
  isActive = true;
  moduleMasterList: ModuleMaster[] = [];
  tabs: Tab[] = [];
  filterModuleMasterList: ModuleMaster[];
  roleMster = new RoleMaster();
  subscription: Subscription;

  flagStatus = true;
  constructor(private userRoleService: UserRoleService, private router: Router) {
  }

  ngOnInit() {


    if (this.userRoleService.isUserLogin) {
      let roleId = sessionStorage.getItem("ROLE_ID");
      this.getModuleListByRoleId(roleId);
    }



  }
  getModuleListByRoleId(roleId: string) {
    this.userRoleService.getModuleListByRoleId(roleId).subscribe(res => {
      this.roleMster = res;
      this.moduleMasterList.push(...this.roleMster.moduleMasterList);

    });

  }


  public displayCounter(event) {

    let tab = new Tab(event.screenId, event.screenName);

    this.router.navigate(['' + event.screenName]);

    console.log(this.tabs.findIndex(item => item.name === tab.name));




    if (this.tabs.findIndex(item => item.name === tab.name) < 0) {
      this.tabs.push(tab);

      console.log('TABS: ', this.tabs);


    } else {
      console.log('Table is already present');

    }


    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.tabs.indexOf(this.tabs.find(tab => tab.routerpath === '.' + this.router.url));
      console.log(' this.activeLinkIndex: ', this.activeLinkIndex);
    });


  }


  version = VERSION;
  public removeMe(i:number) {
    console.log('remove tab index: ' , i);

    if (this.tabs.length > 0) {
         // this.tabs.splice(i, 1);


    } else {
      console.log('==Tab list is not available navigate to home====');

      }

  }

}
