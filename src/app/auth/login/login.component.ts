import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserMaster } from 'src/app/model/user-master';
import { UserRoleService } from '../../shared/user-role/user-role.service';
import { AuthGuardService } from 'src/app/shared/guards/auth-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userMaster = new UserMaster();
  constructor(private router: Router, private userRoleService: UserRoleService,
    private authGuardService: AuthGuardService) { }

  ngOnInit() {

    console.log('====Flusiing Data in Login Ng Onint====');
    this.authGuardService.flushAuthGurdData();
  }
  onSubmit(form: NgForm) {
    console.log('User Data: ', this.userMaster);



 this.userRoleService.login(this.userMaster).subscribe(res => {

      console.log('LOgin Sucess: ', res);
    if (res) {
      this.router.navigate(['/home']);

      } else {
        console.log('====Flusiing Data in Login when user Not match====');
        this.authGuardService.flushAuthGurdData();
        this.router.navigate(['/']);
      }


    }, (error) => {
      console.log(error);
    }
    );






    
    // this.userRoleService.loginUserMster(this.userMaster).subscribe(res => {

    //   console.log('LOgin Sucess: ', res);
    //   sessionStorage.setItem("USER_ID",res.userId);
    //   sessionStorage.setItem("ROLE_ID",res.roleMaster.roleId);

    //   this.router.navigate(['/home']);


    // });
  }
}
