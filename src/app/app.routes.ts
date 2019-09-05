import {ArtistComponent} from './components/artist/artist.component';
import {SearchComponent} from './components/search/search.component';
import {HomeComponent} from './components/home/home.component';
import {Routes} from '@angular/router';

export const ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'artist/:id', component: ArtistComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
];
