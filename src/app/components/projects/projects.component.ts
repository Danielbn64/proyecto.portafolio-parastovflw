import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public projects!: Project[];
  public url: string;

  constructor(

    private readonly _projectService: ProjectService

  ) {

    this.url = Global.url

  }

  ngOnInit(): void {

    this.getProjects();

  }

  getProjects() {

    this._projectService.getProjects().subscribe(

      (response) => {

        if (response.body.projects) {

          this.projects = response.body.projects;

        }
      }
    );
  }
}
