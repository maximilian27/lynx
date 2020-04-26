import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TvShowsSearchComponent } from './layout/tv-shows-search/tv-shows-search.component';
import { TvShowsDetailsComponent } from './layout/tv-shows-details/tv-shows-details.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    TvShowsSearchComponent,
    TvShowsDetailsComponent,
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
