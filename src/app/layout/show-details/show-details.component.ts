import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShowDetailsService } from './show-details.service';
import { ShowEpisodesService } from '../show-episodes/show-episodes.service';
import { Router } from '@angular/router';
import {LoginService} from '../login/login.service';

@Component({
  selector: 'app-tv-shows-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent implements OnDestroy, OnInit {
    private subscriptions: Subscription;
    public details: any;
    public seasonsList: any;
    public token: string;

    constructor(private service: ShowDetailsService,
                private episodesService: ShowEpisodesService,
                private router: Router,
                private loginService: LoginService,
) {

        this.subscriptions = new Subscription();
    }

    ngOnInit(): void {
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
        this.subscriptions.add(this.loginService._token
            .subscribe(result => {
                if (!result) {
                    this.router.navigate(['/login']);
                }
            })
        );
    }


    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

    showEpisodes(id: number, season: string) {
        this.router.navigate([`${id}/episodes/${season}`]);
        this.episodesService.loadEpisodes(season, this.details.id);
    }

}
