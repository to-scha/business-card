import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Profile} from './profile.type';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-profile-card',
  imports: [MatCardModule, MatButtonModule, MatIconModule, AsyncPipe, NgIf, NgForOf],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.sass'
})
export class ProfileCardComponent {
  public profile$: Observable<Profile>;
  private profileUrl = 'profile.json';

  constructor(private http: HttpClient) {
    this.profile$ = this.getprofile();
  }

  private getprofile(): Observable<Profile> {
    return this.http.get<Profile>(this.profileUrl);
  }
}
