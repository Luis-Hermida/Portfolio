import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProject } from '../projects/project';

@Component({
  selector: 'app-web-development',
  templateUrl: './web-development.component.html',
  styleUrls: ['./web-development.component.scss']
})
export class WebDevelopmentComponent implements OnInit {
  projects: IProject[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.projects = this.route.snapshot.data.projects;
  }
}
