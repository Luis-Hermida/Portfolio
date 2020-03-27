import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProject } from '../projects/project';

@Component({
  selector: 'app-mobile-development',
  templateUrl: './mobile-development.component.html',
  styleUrls: ['./mobile-development.component.scss']
})
export class MobileDevelopmentComponent implements OnInit {
  projects: IProject[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.projects = this.route.snapshot.data.projects;
  }
}
