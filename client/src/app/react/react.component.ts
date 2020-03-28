import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProject } from '../projects/project';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.scss']
})
export class ReactComponent implements OnInit {
  projects: IProject[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.projects = this.route.snapshot.data.projects;
  }
}
