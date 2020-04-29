import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { SearchShowsModule } from './layout/search-shows/search-shows.module';
import { ShowDetailsModule } from './layout/show-details/show-details.module';
import { ShowEpisodesModule } from './layout/show-episodes/show-episodes.module';
import { NavbarModule } from './layout/navbar/navbar.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './shared/token.interceptor';
import { LoginComponent } from './layout/login/login.component';
import { LoginModule } from './layout/login/login.module';



@NgModule({
    declarations: [
        AppComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        SearchShowsModule,
        ShowDetailsModule,
        ShowEpisodesModule,
        NavbarModule,
        LoginModule
    ],
    bootstrap: [AppComponent],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    ]
})
export class AppModule { }
