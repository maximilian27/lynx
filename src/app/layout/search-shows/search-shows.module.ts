import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchShowsComponent } from './search-shows.component';
import { FormsModule } from '@angular/forms';
import { SearchFormComponent } from './search-form/search-form.component';
import { ShowCardComponent } from './show-card/show-card.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [SearchShowsComponent, SearchFormComponent, ShowCardComponent],
  exports: [SearchShowsComponent, SearchFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class SearchShowsModule { }
