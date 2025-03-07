import {Component} from '@angular/core';
import {ProfileCardComponent} from './components/profile-card/profile-card.component';
import {ProjectsCardComponent} from './components/projects-card/projects-card.component';
import {SkillsCardComponent} from './components/skills-card/skills-card.component';

@Component({
  selector: 'app-root',
  imports: [ProfileCardComponent, ProjectsCardComponent, SkillsCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'Tobias Schad-Hirschmüller business-card';
}
