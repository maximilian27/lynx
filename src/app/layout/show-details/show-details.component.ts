import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShowDetailsService } from './show-details.service';
import { ShowEpisodesService } from '../show-episodes/show-episodes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tv-shows-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent implements OnInit, OnDestroy {
    private subscriptions: Subscription;
    public details: any;
    public seasonsList: any;


    constructor(private service: ShowDetailsService,
                private episodesService: ShowEpisodesService,
                private router: Router) {

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

    }


    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

    showEpisodes(season: string) {
        this.router.navigate(['/episodes']);
        this.episodesService.loadEpisodes(season, this.details.id);
    }

}
