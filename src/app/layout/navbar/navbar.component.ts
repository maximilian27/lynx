import { Component } from '@angular/core';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import {SearchShowsService} from '../search-shows/search-shows.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    public faSignOutAlt = faSignOutAlt;
    public searchValue: string;


    constructor(private searchShowsService: SearchShowsService) { }


    onSearchValueChange(value) {
        this.searchValue = value;
        this.searchShowsService.searchShows(value);
    }
}
