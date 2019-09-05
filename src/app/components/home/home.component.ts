import {SpotifyService} from './../../services/spotify.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  isLoading: boolean = false;
  newSongs: any[] = [];

  constructor(private spotify: SpotifyService) {
    this.isLoading = true;
    this.spotify.getNewReleases().subscribe(newSongs => {
      this.newSongs = newSongs;
      this.isLoading = false;
    });
  }

  ngOnInit() {}
}
