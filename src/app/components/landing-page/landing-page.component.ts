import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';
import { Project } from '../../models/project';
import { fading } from '../animation';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations: [fading]
})
export class LandingPageComponent implements OnInit {

  public projects!: Project[];
  public featured!: Array<Project>;
  public url: string;

  constructor(

    private readonly _projectService: ProjectService

  ) {

    this.url = Global.url

  }

  ngOnInit(): void {

    this.getFeatured();

  }

  getFeatured() {

    this._projectService.getProjects().subscribe(

      (response) => {

        if (response.body.projects) {

          this.projects = response.body.projects;
          this.featured = new Array<Project>

          for (let project of this.projects) {

            if (project.category == 'destacado') {

              this.featured.push(project);

            }
          }
        }
      }
    );
  }

}
