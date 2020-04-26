import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TvShowsSearchComponent } from './layout/tv-shows-search/tv-shows-search.component';
import { TvShowsDetailsComponent } from './layout/tv-shows-details/tv-shows-details.component';


const routes: Routes = [
  { path: 'search', component: TvShowsSearchComponent },
  { path: 'details', component: TvShowsDetailsComponent },
  { path: '**', redirectTo: '/search', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
