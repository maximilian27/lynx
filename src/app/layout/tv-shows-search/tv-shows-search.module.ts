import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvShowsSearchComponent } from './tv-shows-search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { SearchFormComponent } from './search-form/search-form.component';
import { ShowCardComponent } from './show-card/show-card.component';



@NgModule({
  declarations: [TvShowsSearchComponent, SearchFormComponent, ShowCardComponent],
  exports: [TvShowsSearchComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule
  ]
})
export class TvShowsSearchModule { }
