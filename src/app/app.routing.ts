import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AccessGuard } from "./access.guard";

import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { CreateComponent } from './components/create/create.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';

const appRoutes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'sobre-mi', component: AboutComponent },
    { path: 'proyectos', component: ProjectsComponent },
    { path: 'crear-proyecto', component: CreateComponent, canActivate: [AccessGuard] },
    { path: 'contacto', component: ContactComponent },
    { path: 'login', component: LoginComponent },
    { path: 'proyecto/:id', component: DetailComponent },
    { path: 'editar-proyecto/:id', component: EditComponent, canActivate: [AccessGuard] },
    { path: '**', component: ErrorComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);