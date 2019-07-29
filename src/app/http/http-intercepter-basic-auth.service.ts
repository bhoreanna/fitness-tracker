import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRoleService } from '../shared/user-role/user-role.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor(
    private basicAuthenticationService: UserRoleService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {


    const basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    const username = this.basicAuthenticationService.getAuthenticatedUser();

    if (basicAuthHeaderString && username) {
      request = request.clone({
        setHeaders : {
            Authorization : basicAuthHeaderString
          }
        });
    }
    return next.handle(request);
  }


}
