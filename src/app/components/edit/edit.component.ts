import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  public project!: Project;
  public title: string;
  public status!: string;
  public filesToUpload: any = [];
  public savedProject!: any;
  public url: string;

  constructor(

    private readonly _projectService: ProjectService,
    private readonly _route: ActivatedRoute,
    private readonly _uploadService: UploadService,
    private readonly _router: Router,

  ) {

    this.title = 'Crear proyecto';
    this.url = Global.url

  }

  ngOnInit(): void {

    this._route.params.subscribe(params => {

      let id = params['id'];
      this.getProject(id);

    });
  };

  getProject(id: any) {

    this._projectService.getProject(id).subscribe(

      (response) => {

        this.project = response.body.project
        console.log(this.project);

      }
    );
  };

  getFile(fileInput: any): any {

    const fileName = fileInput.target.files[0];
    this.filesToUpload.push(fileName);
    console.log(fileInput.target.files);

  }

  onSubmit(form: any) {

    this._projectService.updateProject(this.project).subscribe(

      (response) => {

        if (response.status = 200) {

          if (this.filesToUpload) {

            this._uploadService.makeFileRequest(

              Global.url + "upload-image/" + response.body.project._id,
              [], this.filesToUpload,
              'image').then((result: any) => {
                this.savedProject = result.project;
                this.status = 'success';

              });
          } else {

            this.status = 'failed';

          }

        } else {

          this.status = 'failed';

        }
      }
    );
  }

}
