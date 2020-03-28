import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ExperienceComponent } from './experience/experience.component';
import { ReactComponent } from './react/react.component';
import { MobileDevelopmentComponent } from './mobile-development/mobile-development.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { NodejsComponent } from './nodejs/nodejs.component';
import { PythonComponent } from './python/python.component';

import { ContactComponent } from './contact/contact.component';

import {
  ProjectListComponent,
  ProjectDialogComponent
} from './projects/project-list/project-list.component';
import { reactProjects } from './projects/react';
import { mobileProjects } from './projects/mobile';
import { webProjects } from './projects/web';
import { nodeProjects } from './projects/node';
import { pythonProjects } from './projects/python';
import { CertificationsComponent } from './Certifications/certifications.component';

const appRoutes: Routes = [
  { path: 'experience', component: ExperienceComponent },
  {
    path: 'react',
    component: ReactComponent,
    data: { projects: reactProjects }
  },
  {
    path: 'mobile-development',
    component: MobileDevelopmentComponent,
    data: { projects: mobileProjects }
  },
  {
    path: 'web-development',
    component: WebDevelopmentComponent,
    data: { projects: webProjects }
  },
  {
    path: 'nodejs',
    component: NodejsComponent,
    data: { projects: nodeProjects }
  },
  {
    path: 'python',
    component: PythonComponent,
    data: { projects: pythonProjects }
  },
  { path: 'certifications', component: CertificationsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/experience', pathMatch: 'full' },
  { path: '**', component: ExperienceComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    ExperienceComponent,
    ReactComponent,
    MobileDevelopmentComponent,
    WebDevelopmentComponent,
    NodejsComponent,
    PythonComponent,
    ContactComponent,
    ProjectListComponent,
    ProjectDialogComponent,
    CertificationsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatDialogModule,
    MatButtonModule,
    MatCarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
