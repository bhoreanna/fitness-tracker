import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {VERSION} from '@angular/material';
import { Subscription } from 'rxjs';
import { ModuleMaster } from 'src/app/model/module-master';
import { UserRoleService } from 'src/app/shared/user-role/user-role.service';
import { RoleMaster } from 'src/app/model/role-master';
@Component({
  selector: 'app-dynamic-menu',
  templateUrl: './dynamic-menu.component.html',
  styleUrls: ['./dynamic-menu.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class DynamicMenuComponent implements OnInit {
  isActive = true;
  moduleMasterList: ModuleMaster []  = [];

  filterModuleMasterList: ModuleMaster[];
  roleMster= new RoleMaster();
  subscription: Subscription;

  flagStatus = true;
  constructor(private userRoleService: UserRoleService) { 
     }

  ngOnInit() {


    if(this.userRoleService.isUserLogin){
      let roleId = sessionStorage.getItem("ROLE_ID");
      this.getModuleListByRoleId(roleId);
    }

  }
  getModuleListByRoleId(roleId: string) {
    this.userRoleService. getModuleListByRoleId(roleId).subscribe(res=>{
     this.roleMster=res;
     this.moduleMasterList.push(...this.roleMster.moduleMasterList);

    });

  }





  version = VERSION;
  

}
