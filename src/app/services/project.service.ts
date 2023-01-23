import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';
import { Project } from '../models/project'

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private readonly api = Global.url;

  constructor(

    private readonly http: HttpClient,

  ) { }

  saveProject(project: Project): Observable<any> {

    const body = project;
    return this.http.post(this.api + 'save-project', body, { observe: 'response' });

  }

  getProjects(): Observable<any> {

    return this.http.get(this.api + 'projects', { observe: 'response' });

  }

  getProject(id: string): Observable<any> {

    return this.http.get(this.api + 'project/' + id, { observe: 'response' });
  }

  deleteProject(id: string): Observable<any> {

    return this.http.delete(this.api + 'project-delete/' + id, { observe: 'response' });

  }

  updateProject(project: Project): Observable<any> {

    return this.http.put(this.api + 'project-updated/' + project._id, project, { observe: 'response' });

  }
}
