import {Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {MatChip, MatChipSet} from '@angular/material/chips';
import {AsyncPipe, NgForOf} from '@angular/common';
import {SkillCategory} from './skill-category.type';

@Component({
  selector: 'app-skills-card',
  imports: [MatCardModule, MatChipSet, MatChip, AsyncPipe, NgForOf],
  templateUrl: './skills-card.component.html',
  styleUrl: './skills-card.component.sass',
})
export class SkillsCardComponent {
  public skillCategory: Observable<SkillCategory[]>;
  private skillsUrl = 'skills.json';

  constructor(private http: HttpClient) {
    this.skillCategory = this.getSkills();
  }

  private getSkills(): Observable<SkillCategory[]> {
    return this.http.get<SkillCategory[]>(this.skillsUrl);
  }
}
