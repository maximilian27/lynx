import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShowEpisodesService } from './show-episodes.service';
import { Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EpisodesDialogComponent } from './episodes-dialog/episodes-dialog.component';

@Component({
  selector: 'app-show-episodes',
  templateUrl: './show-episodes.component.html',
  styleUrls: ['./show-episodes.component.scss']
})
export class ShowEpisodesComponent implements OnInit, OnDestroy {
   private subscriptions: Subscription;
   public episodesList: any;


    constructor(private service: ShowEpisodesService,
                private modalService: NgbModal) {
        this.subscriptions = new Subscription();

        this.subscriptions.add(this.service.episodesList
            .subscribe(result => {
              this.episodesList = result;
              // this.toggleEpisodes = !this.toggleEpisodes;
            })
        );
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    }

    openDialog(episode) {
        const modalRef = this.modalService.open(EpisodesDialogComponent);
        modalRef.componentInstance.episode = episode;
    }

}
