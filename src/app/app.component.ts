import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'proyecto-portafolio';

  hide: boolean | undefined

  constructor(

    private readonly _userService: UserService,

  ) {

    this.hide = false;

  }

  ngDoCheck(): void {
      
    //this.hide = this._userService.isLoggedIn();

  }
}
