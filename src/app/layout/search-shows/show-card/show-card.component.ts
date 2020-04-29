import { Component, Input } from '@angular/core';
import { ShowDetailsService } from '../../show-details/show-details.service';

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.scss']
})
export class ShowCardComponent {
    @Input() tvShow: any;
    public showMore: boolean;

    constructor(private showDetailsService: ShowDetailsService) {
        this.showMore = false;
    }

    navigateToDetails(showId: number) {

        this.showDetailsService.loadDetails(showId);
        this.showDetailsService.loadSeasons(showId);
    }

}
