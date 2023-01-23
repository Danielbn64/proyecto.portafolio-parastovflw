import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  public title: string;
  public subtitle: string;
  public web: string;

  constructor() {

    this.title = "Daniel Arturo";

    this.subtitle = "Desarrollador web";

    this.web = "DaniLoad.es";

  }
}
