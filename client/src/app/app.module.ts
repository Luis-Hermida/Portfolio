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
import { FrontEndComponent } from './front-end/front-end.component';
import { BackEndComponent } from './back-end/back-end.component';
import { MobileDevelopmentComponent } from './mobile-development/mobile-development.component';

import { CertificationsComponent } from './certifications/certifications.component';
import { ContactComponent } from './contact/contact.component';

import {
  ProjectListComponent,
  ProjectDialogComponent,
} from './projects/project-list/project-list.component';
import { frontEndProjects } from './projects/front-end';
import { backEndProjects } from './projects/back-end';
import { mobileProjects } from './projects/mobile';

const appRoutes: Routes = [
  { path: 'experience', component: ExperienceComponent },
  {
    path: 'front-end',
    component: FrontEndComponent,
    data: { projects: frontEndProjects },
  },
  {
    path: 'back-end',
    component: BackEndComponent,
    data: { projects: backEndProjects },
  },
  {
    path: 'mobile-development',
    component: MobileDevelopmentComponent,
    data: { projects: mobileProjects },
  },
  { path: 'certifications', component: CertificationsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/experience', pathMatch: 'full' },
  { path: '**', component: ExperienceComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    ExperienceComponent,
    FrontEndComponent,
    BackEndComponent,
    MobileDevelopmentComponent,
    ContactComponent,
    ProjectListComponent,
    ProjectDialogComponent,
    CertificationsComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatDialogModule,
    MatButtonModule,
    MatCarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
