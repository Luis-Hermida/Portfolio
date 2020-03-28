import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProject } from '../projects/project';

@Component({
  selector: 'app-nodejs',
  templateUrl: './nodejs.component.html',
  styleUrls: ['./nodejs.component.scss']
})
export class NodejsComponent implements OnInit {
  projects: IProject[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.projects = this.route.snapshot.data.projects;
  }
}
