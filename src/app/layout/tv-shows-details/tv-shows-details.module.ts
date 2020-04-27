import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvShowsDetailsComponent } from './tv-shows-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [TvShowsDetailsComponent],
  exports: [TvShowsDetailsComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class TvShowsDetailsModule { }
