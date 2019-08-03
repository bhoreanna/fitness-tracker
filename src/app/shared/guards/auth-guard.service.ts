import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserRoleService } from '../user-role/user-role.service';
import { ModuleMaster } from 'src/app/model/module-master';
import { RoleMaster } from 'src/app/model/role-master';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  moduleMasterList: ModuleMaster[] = [];

  filterModuleMasterList: ModuleMaster[];

  roleMster = new RoleMaster();

  flag = true;
  public role: string;
  public tempData = null;
  urls: string[] = [];


  constructor(private userRoleService: UserRoleService, private router: Router, ) {

   // console.log('--------------- In AuthGuardService Service: ------------');
  }

  public flushAuthGurdData() {
    
   // console.log('...FLUSSING DATA Start in authservice...');

    this.flag = true;
    this.urls = [];
    this.moduleMasterList = [];

  //  console.log('...FLUSSING DATA SUCESSFULLY...');

  }

  public getModuleListByRoleId() {

    let roleId = sessionStorage.getItem("ROLE_ID");

    this.userRoleService.getModuleListByRoleId(roleId).subscribe(res => {

      this.moduleMasterList.push(...res.moduleMasterList);

      this.moduleMasterList.forEach(module =>
        module.screenMasterList.forEach(s => {

          this.urls.push(s.screenName);
         // console.log('After push from db URL LIST IN ARRAY: ', this.urls);
        })
      );
      console.log('After push from db URL LIST IN ARRAY: ', this.urls);

    });
   // console.log('After push from db URL LIST IN ARRAY: ', this.urls);

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('------ canActivate--------');

    

    if (this.userRoleService.isUserLogin) {

      if (this.flag) {
        this.urls = [];
        this.getModuleListByRoleId();

        this.flag = false;
      }
      var exist = false;
      route.url.forEach(u => {
        this.tempData = u;
          console.info('Current this.tempData: ', this.tempData);
        this.urls.forEach(s => {
          //  console.log('In for loop', s);
          if (s.includes(this.tempData)) {
            console.log(`route.url array =${u}`);
            console.log('In For Loop URL NAME: ', s);
            exist = true;
          }
        });
      });
      if (exist) {
        console.log('Return True for componenet exist value : ', exist);
        return true;
      }
      else {
        if (this.tempData.path.includes('home')) {
          console.log('Return true for Home componenet this.tempData', this.tempData);
          return true;
        }

       
        console.log('Return false');

        return false;
      }
    }
  }
}
