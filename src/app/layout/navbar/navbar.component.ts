import { Component } from '@angular/core';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { SearchShowsService } from '../search-shows/search-shows.service';
import { NavigationStart, Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    public faSignOutAlt = faSignOutAlt;
    public displaySearch: boolean;
    public displayNavbar: boolean;

    constructor(private searchShowsService: SearchShowsService,
                private router: Router) {
        this.router.events.subscribe(value => {
            if (value instanceof NavigationStart) {
                console.log(value.url); // your current route
                if (value.url === '/search') {
                    this.displaySearch = true;
                } else  {
                    this.displaySearch = false;
                }
                if (value.url === '/login') {
                    this.displayNavbar = false;
                } else {
                    this.displayNavbar = true;
                }
            }
        });
    }


    onSearchValueChange(value) {
        this.searchShowsService.searchShows(value);
    }

    logout() {
        this.searchShowsService.setShowList(null);
    }

}
