import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { SearchShowsModule } from '../search-shows/search-shows.module';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    SearchShowsModule
  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }
