import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { TvShowsSearchModule } from './layout/tv-shows-search/tv-shows-search.module';
import { TvShowsDetailsModule } from './layout/tv-shows-details/tv-shows-details.module';



@NgModule({
  declarations: [
    AppComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    TvShowsSearchModule,
    TvShowsDetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
