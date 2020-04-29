import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { SearchShowsModule } from './layout/search-shows/search-shows.module';
import { ShowDetailsModule } from './layout/show-details/show-details.module';
import { ShowEpisodesModule } from './layout/show-episodes/show-episodes.module';
import { NavbarModule } from './layout/navbar/navbar.module';



@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        SearchShowsModule,
        ShowDetailsModule,
        ShowEpisodesModule,
        NavbarModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
