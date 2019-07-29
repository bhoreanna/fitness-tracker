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

    console.log('--------------- In AuthGuardService Service: ------------');
  }

  public flushAuthGurdData() {
    
    console.log('...FLUSSING DATA Start in authservice...');

    this.flag = true;
    this.urls = [];
    this.moduleMasterList = [];

    console.log('...FLUSSING DATA SUCESSFULLY...');

  }

  public getModuleListByRoleId() {

    let roleId = sessionStorage.getItem("ROLE_ID");
    console.log('Role Id in Auth Gurd Service: ', roleId);

    this.userRoleService.getModuleListByRoleId(roleId).subscribe(res => {
      console.log('Return role list Object: ', res);

      this.moduleMasterList.push(...res.moduleMasterList);

      console.log('this.moduleMasterList in AuthGurd Service: ', this.moduleMasterList);
      this.moduleMasterList.forEach(module =>
        module.screenMasterList.forEach(s => {
          this.urls.push(s.screenName);
         // console.log('After push from db URL LIST IN ARRAY: ', this.urls);
        })
      );
    });

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('-------------------------- canActivate------------------------------------');

    if (this.userRoleService.isUserLogin) {

      if (this.flag) {
        this.urls = [];
        console.log('=====First time Call for getting list======');
        this.getModuleListByRoleId();

        this.flag = false;
        console.log('URL LIST IN ARRAY: ', this.urls);
      }
      var exist = false;
      // console.log(`route component.toString = ${route.component.toString} state toString =  ${route.toString}`);
      route.url.forEach(u => {
        //  console.log(`Current URL array route.url array =${u}`);
        this.tempData = u;
        //  console.info('Current this.tempData: ', this.tempData);
        this.urls.forEach(s => {
          //  console.log('In for loop', s);
          if (s.includes(this.tempData)) {
            console.log('-------------------------- START------------------------------------');
            console.log(`route.url array =${u}`);
            console.log('In For Loop URL NAME: ', s);
            exist = true;
            console.log('-------------------------------END -------------------------------');
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
        //this.router.navigate(['/']);
        console.log('Return false');
        return false;
      }
    }
  }
}
