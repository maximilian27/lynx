import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { RouterModule } from '@angular/router';
import { SearchShowsModule } from '../search-shows/search-shows.module';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    SearchShowsModule
  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }
