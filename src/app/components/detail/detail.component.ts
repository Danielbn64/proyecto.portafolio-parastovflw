import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public url: string;
  public project!: Project;

  constructor(

    private readonly _projectService: ProjectService,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,

  ) {

    this.url = Global.url

  }

  ngOnInit(): void {

    this._route.params.subscribe(params => {

      let id = params['id'];
      this.getProject(id);

    });
  };

  getProject(id:any) {

    this._projectService.getProject(id).subscribe(

      (response) => {

        this.project = response.body.project

      }
    );
  };
  
  deleteProject(id: any){

    this._projectService.deleteProject(id).subscribe(

      (response) => {

        if(response.body.project){

          this._router.navigate(['/proyectos']);

        }

      }
    )
  };
}
