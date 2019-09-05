import {SpotifyService} from './../../services/spotify.service';
import {Component} from '@angular/core';
import {ThrowStmt} from '@angular/compiler';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  isLoading: boolean = false;
  artists: any[] = [];

  constructor(private spotify: SpotifyService) {}

  onSearch(searchTerm: string) {
    this.isLoading = true;
    this.spotify.getArtists(searchTerm).subscribe(artists => {
      this.artists = artists;
      this.isLoading = false;
    });
  }
}
