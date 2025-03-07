import {Component, ViewChild} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AsyncPipe, DatePipe, NgForOf, NgIf} from '@angular/common';
import {Project} from './project.type';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from '@angular/material/expansion';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {MatChip, MatChipSet} from '@angular/material/chips';

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
    MatIcon,
    MatIconButton,
    NgIf,
    MatChip,
    MatChipSet
  ],
  templateUrl: './projects-card.component.html',
  styleUrl: './projects-card.component.sass'
})
export class ProjectsCardComponent {
  @ViewChild('projectAccordion') projectAccordion: MatAccordion | undefined;

  public toggleView: boolean = true;
  public projects: Observable<Project[]>;
  private projectUrl = 'projects.json';

  constructor(private http: HttpClient) {
    this.projects = this.getProjects();
  }

  public openAllPanels() {
    this.projectAccordion?.openAll();
    this.toggleView = true;
  }

  public closeAllPanels() {
    this.projectAccordion?.closeAll();
    this.toggleView = false;
  }

  private getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectUrl);
  }
}
