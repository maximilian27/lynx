import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchShowsComponent } from './layout/search-shows/search-shows.component';
import { ShowDetailsComponent } from './layout/show-details/show-details.component';
import { ShowEpisodesComponent } from './layout/show-episodes/show-episodes.component';
import { LoginComponent } from './layout/login/login.component';



const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'search', component: SearchShowsComponent },
    { path: 'details/:id', component: ShowDetailsComponent },
    { path: ':id/episodes/:season', component: ShowEpisodesComponent},
    { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ]
})
export class AppRoutingModule { }
