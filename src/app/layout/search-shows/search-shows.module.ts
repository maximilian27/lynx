import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchShowsComponent } from './search-shows.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { SearchFormComponent } from './search-form/search-form.component';
import { ShowCardComponent } from './show-card/show-card.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [SearchShowsComponent, SearchFormComponent, ShowCardComponent],
  exports: [SearchShowsComponent, SearchFormComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    NgbModule
  ]
})
export class SearchShowsModule { }
