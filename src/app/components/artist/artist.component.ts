import {SpotifyService} from './../../services/spotify.service';
import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [],
})
export class ArtistComponent {
  isLoading: boolean = false;
  artist: any = {};
  topTracks: any[] = [];

  constructor(private route: ActivatedRoute, private spotify: SpotifyService) {
    this.route.params.subscribe(params => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getArtist(id: string) {
    this.isLoading = true;
    this.spotify.getArtist(id).subscribe((artist: any) => {
      this.artist = artist;
      this.isLoading = false;
    });
  }

  getTopTracks(id: string) {
    this.spotify
      .getTopTracks(id)
      .subscribe(topTracks => (this.topTracks = topTracks));
  }
}
