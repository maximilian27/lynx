import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShowDetailsService } from './show-details.service';
import { ShowEpisodesService } from '../show-episodes/show-episodes.service';
import { Router } from '@angular/router';
import {SearchShowsService} from '../search-shows/search-shows.service';

@Component({
  selector: 'app-tv-shows-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent implements  OnDestroy {
    private subscriptions: Subscription;
    public details: any;
    public seasonsList: any;
    public token: string;

    constructor(private service: ShowDetailsService,
                private episodesService: ShowEpisodesService,
                private router: Router,
                private searchShowsService: SearchShowsService,
) {

        this.subscriptions = new Subscription();

        this.subscriptions.add(this.service.details
            .subscribe(result => {
              this.details = result;
            })
        );

        this.subscriptions.add(this.service.seasonsList
            .subscribe(result => {
              this.seasonsList = result;
            })
        );

        // todo check if token exists with an guard and redirect to the main page based on that
        this.subscriptions.add(this.searchShowsService._token
            .subscribe(result => {
                if (!result) {
                    this.router.navigate(['/search']);
                }
            })
        );

    }


    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

    showEpisodes(season: string) {
        this.router.navigate(['/episodes']);
        this.episodesService.loadEpisodes(season, this.details.id);
    }

}
