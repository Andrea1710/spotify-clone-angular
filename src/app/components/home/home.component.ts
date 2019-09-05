import {Component} from '@angular/core';

import {SpotifyService} from './../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent {
  isLoading: boolean = false;
  newSongs: any[] = [];
  error: boolean = false;
  errorMessage: string;

  constructor(private spotify: SpotifyService) {
    this.isLoading = true;
    this.spotify.getNewReleases().subscribe(
      newSongs => {
        this.newSongs = newSongs;
        this.isLoading = false;
      },
      err => {
        this.error = true;
        this.isLoading = false;
        this.errorMessage = err.error.error.message;
      }
    );
  }
}
