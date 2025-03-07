import {Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AsyncPipe, DatePipe, NgForOf} from '@angular/common';
import {Project} from './project.type';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelDescription, MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from '@angular/material/expansion';

@Component({
  selector: 'app-projects-card',
  imports: [
    MatCardModule,
    NgForOf,
    AsyncPipe,
    DatePipe,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatExpansionPanelDescription
  ],
  templateUrl: './projects-card.component.html',
  styleUrl: './projects-card.component.sass'
})
export class ProjectsCardComponent {
  public projects: Observable<Project[]>;
  private projectUrl = 'projects.json';

  constructor(private http: HttpClient) {
    this.projects = this.getProjects();
  }

  private getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectUrl);
  }
}
