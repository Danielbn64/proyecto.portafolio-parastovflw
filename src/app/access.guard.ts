import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from "./services/user.service";

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate {

  permission!: boolean;

  constructor(

    private _userService: UserService

  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.permission = this._userService.isLoggedIn();
    return this.permission;
  }

}
