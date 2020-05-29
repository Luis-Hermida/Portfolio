import { Component, OnInit, Input, Inject } from '@angular/core';
import { IProject } from '../project';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
  @Input() projects: Array<IProject>;
  usedTechnologies = ['All'];
  activeTechnologiesFilter = 'All';
  activeProjects: Array<IProject>;

  constructor(private dialog: MatDialog) {}
  ngOnInit(): void {
    this.getUsedTechnologies(this.projects);
    this.setAllTechnologyFilter();
  }

  getUsedTechnologies(projects: Array<IProject>) {
    projects.map((project) =>
      project.technologies.map((technology) => {
        if (!this.usedTechnologies.includes(technology)) {
          this.usedTechnologies.push(technology);
        }
      })
    );
  }

  setTechnologiesFilter(filter: string) {
    if (filter === this.activeTechnologiesFilter) {
      return;
    }
    this.activeTechnologiesFilter = filter;
    if (filter === 'All') {
      this.setAllTechnologyFilter();
    } else {
      this.activeProjects = [];
      this.setCustomTechnologyFilter(filter);
    }
  }

  setAllTechnologyFilter() {
    this.activeProjects = Array.from(this.projects);
  }

  setCustomTechnologyFilter(filter: string) {
    this.projects.map((project) => {
      if (project.technologies.includes(filter)) {
        this.activeProjects.push(project);
      }
    });
  }

  openDialog(images: Array<string>): void {
    this.dialog.open(ProjectDialogComponent, {
      minWidth: '300px',
      maxWidth: '900px',
      width: '50%',
      panelClass: 'project-dialog',
      data: { images },
    });
  }
}

@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.scss'],
})
export class ProjectDialogComponent {
  numberOfImages: number;

  constructor(
    public dialogRef: MatDialogRef<ProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  close(): void {
    this.dialogRef.close();
  }
}
