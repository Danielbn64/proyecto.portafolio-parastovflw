import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import Cookies from 'js-cookie';//intente agregar "allowSyntheticDefaultImports": true 
import { Global } from './global';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API = Global.url;
  public asyncResponse!: string;
  public validation = false;

  constructor(

    private readonly http: HttpClient,
    private _router: Router,

  ) { }

  login(user: User, gettoken = null): Observable<any> {

    if (gettoken != null) {
      user.gettoken = gettoken;
    }

    const body = user;
    return this.http.post<any>(this.API + 'login', body, { observe: 'response' });
  }

  isLoggedIn(): boolean {

    if (Cookies.get('token')) {

      this.validation = true
    }
    return this.validation;
  };
}
