import { Component, DoCheck } from '@angular/core';
import { UserService } from '../../services/user.service';
import Cookies from 'js-cookie'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements DoCheck {

  hide: boolean | undefined

  constructor(

    private readonly _userService: UserService,

  ) {

    this.hide = false;

  }

  ngDoCheck(): void {

    this.hide = this._userService.isLoggedIn();

  }

  logout() {

    Cookies.set('token', "");
    return false
  }

}
