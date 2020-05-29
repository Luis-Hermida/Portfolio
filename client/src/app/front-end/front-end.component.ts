import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProject } from '../projects/project';

@Component({
  selector: 'app-front-end',
  templateUrl: './front-end.component.html',
  styleUrls: ['./front-end.component.scss'],
})
export class FrontEndComponent implements OnInit {
  projects: IProject[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.projects = this.route.snapshot.data.projects;
  }
}
