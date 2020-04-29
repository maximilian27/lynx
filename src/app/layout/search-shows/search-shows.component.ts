import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { SearchShowsService } from './search-shows.service';
import { Subscription } from 'rxjs';


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

    constructor(private service: SearchShowsService) {
        this.subscriptions = new Subscription();
        this.page = 1;
        this.pageSize = 10;

        this.subscriptions.add(this.service.showsList
            .subscribe(result => {
                this.tvShows = result;
            })
        );
    }

    ngOnInit(): void {
        // todo create a login page a get the token based on that. This is just a workaround
        this.service.loadToken();
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }
}
