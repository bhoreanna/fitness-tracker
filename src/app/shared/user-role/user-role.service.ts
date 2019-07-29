import { Injectable } from '@angular/core';
import { RoleMaster } from 'src/app/model/role-master';
import { HttpClient } from '@angular/common/http';
import { UserMaster } from 'src/app/model/user-master';
import { Router } from '@angular/router';
import {map} from 'rxjs/operators';
import { AuthGuardService } from '../guards/auth-guard.service';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'auth';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {
  
  USER_Name:string = "";
  ROLE_ID:string = "";
  private baseUrl = 'http://localhost:9992';

  constructor(private _http:  HttpClient,private router: Router) { 


  }




  login(user: UserMaster) {

    console.log('********** UserAuthService *******************');


    const username = user.userName;
    const password = user.password;

   // console.log('User name: ', username);
   // console.log('password: ', password);


    return this._http.post<any>(

      this.baseUrl + '/authenticate', {
        username,
        password
      }).pipe(
        map(
          data => {
           // console.log('return data : ', data);
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
           // console.log('ROLE_ID: ' ,data.role );
            sessionStorage.setItem('ROLE_ID',data.roleId);
            return data;
          }
        )
      );
    // console.log("Execute Hello World Bean Service")
  }



  public userMasterLogOut(){

    sessionStorage.setItem(AUTHENTICATED_USER,"");
    sessionStorage.setItem("ROLE_ID","");
    sessionStorage.setItem(TOKEN,"");
    //this.authGuardService.flushAuthGurdData();
    this.router.navigate(['/']);
  
  }
  
  
  public isUserLogin(){
    this.USER_Name = sessionStorage.getItem("AUTHENTICATED_USER");
    if(this.USER_Name){
      console.log('IS LOGIN TRUE IN SERVICE');
      return true;
    }
    console.log('IS LOGIN FALSE IN SERVICE');
  
    return false;
  }



  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem(TOKEN);
    }
  }



  
   public saveRoleMster(roleMaster:RoleMaster){
    return this._http.post(this.baseUrl + '/roleMaster/saveRoleMaster', roleMaster);

   }

  // public updateModuleMster(moduleMaster:ModuleMaster){

  // }

  // public deleteModuleMster(moduleUid:number){

  // }



   public getRoleMasterList(){

    return this._http.get<RoleMaster[]>(this.baseUrl + '/roleMaster/roleMasterList');

   }


   public getModuleListByRoleId(roleId: string) {
    return this._http.get<RoleMaster>(this.baseUrl + '/roleMaster/roleMasterByRoleId/'+roleId);

  }


   public saveUserMster(userMaster:UserMaster){
    return this._http.post(this.baseUrl + '/userMaster/saveUserMaster', userMaster);

   }


   public loginUserMster(userMaster:UserMaster){
    return this._http.post<UserMaster>(this.baseUrl + '/userMaster/loginUserMaster', userMaster);

   }


   searchUserMasterByUserId(userId: String) {
    return this._http.get<UserMaster>(this.baseUrl + '/userMaster/userMasterByUserId/'+userId);

  }


}
