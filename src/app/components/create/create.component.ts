import { transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  public project!: Project;
  public title: string;
  public status!: string;
  public filesToUpload: any = [];
  public savedProject!: any;
  public url: string;

  constructor(

    private readonly _projectService: ProjectService,
    private readonly _uploadService: UploadService

  ) {

    this.project = new Project('', '', '', '', 2022, '', '');
    this.title = 'Crear proyecto';
    this.url = Global.url

  }

  ngOnInit(): void {

  }

  getFile(fileInput: any): any {

    const fileName = fileInput.target.files[0];
    this.filesToUpload.push(fileName);
    console.log(fileInput.target.files);

  }

  onSubmit(form: any) {

    console.log(this.project);
    this._projectService.saveProject(this.project).subscribe(

      (response) => {

        if (response.status == 200) {

          this._uploadService.makeFileRequest(

            Global.url + "upload-image/" + response.body.project._id,
            [], this.filesToUpload,
            'image').then((result: any) => {
              this.status = 'success';
              form.reset();
              this.savedProject = result;

            });

        } else {

          this.status = 'failed';

        }
      }
    );
  }
}
