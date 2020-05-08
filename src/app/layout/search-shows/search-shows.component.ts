import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { SearchShowsService } from './search-shows.service';
import { Subscription } from 'rxjs';
import {Router} from '@angular/router';
import {LoginService} from '../login/login.service';


@Component({
    selector: 'app-search-shows',
    templateUrl: './search-shows.component.html',
    styleUrls: ['./search-shows.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class SearchShowsComponent implements OnInit, OnDestroy {
    public tvShows: any[];
    private subscriptions: Subscription;
    public page: number;
    public pageSize: number;

    constructor(private service: SearchShowsService,
                private router: Router,
                private loginService: LoginService) {
        this.subscriptions = new Subscription();
        this.page = 1;
        this.pageSize = 10;
    }

    ngOnInit(): void {
        this.subscriptions.add(this.service.showsList
            .subscribe(result => {
                this.tvShows = result;
            })
        );

        // this.subscriptions.add(this.loginService._token
        //     .subscribe(result => {
        //         if (!result) {
        //             this.router.navigate(['/login']);
        //         }
        //     })
        // );
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }
}
