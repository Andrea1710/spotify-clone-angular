import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

// Components
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {SearchComponent} from './components/search/search.component';
import {ArtistComponent} from './components/artist/artist.component';
import {NavbarComponent} from './components/shared/navbar/navbar.component';

// Routes
import {ROUTES} from './app.routes';

// Pipes
import {NoImagePipe} from './pipes/no-image.pipe';
import { CardsComponent } from './components/cards/cards.component';
import { LoaderComponent } from './components/shared/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    NoImagePipe,
    CardsComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash: true}),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
