import { Component, OnDestroy } from '@angular/core';
import { ShowEpisodesService } from './show-episodes.service';
import { Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EpisodesDialogComponent } from './episodes-dialog/episodes-dialog.component';
import {SearchShowsService} from '../search-shows/search-shows.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-show-episodes',
  templateUrl: './show-episodes.component.html',
  styleUrls: ['./show-episodes.component.scss']
})
export class ShowEpisodesComponent implements OnDestroy {
    private subscriptions: Subscription;
    public episodesList: any;

    constructor(private service: ShowEpisodesService,
                private modalService: NgbModal,
                private searchShowsService: SearchShowsService,
                private router: Router) {
        this.subscriptions = new Subscription();

        this.subscriptions.add(this.service.episodesList
            .subscribe(result => {
              this.episodesList = result;
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

    openDialog(episode) {
        const modalRef = this.modalService.open(EpisodesDialogComponent);
        modalRef.componentInstance.episode = episode;
    }

}
