import { Component, OnDestroy } from '@angular/core';
import { ShowEpisodesService } from './show-episodes.service';
import { Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EpisodesDialogComponent } from './episodes-dialog/episodes-dialog.component';
import { SearchShowsService } from '../search-shows/search-shows.service';
import { Router } from '@angular/router';
import { Episode } from './episode';
import {LoginService} from '../login/login.service';

@Component({
  selector: 'app-show-episodes',
  templateUrl: './show-episodes.component.html',
  styleUrls: ['./show-episodes.component.scss']
})
export class ShowEpisodesComponent implements OnDestroy {
    private subscriptions: Subscription;
    public episodesList: Episode[];

    constructor(private service: ShowEpisodesService,
                private modalService: NgbModal,
                private loginService: LoginService,
                private router: Router) {
        this.subscriptions = new Subscription();

        this.subscriptions.add(this.service.episodesList
            .subscribe(result => {
              this.episodesList = result;
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

    openDialog(episode) {
        const modalRef = this.modalService.open(EpisodesDialogComponent);
        modalRef.componentInstance.episode = episode;
    }

}
