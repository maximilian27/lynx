import { Component, Input, OnInit } from '@angular/core';
import { ShowDetailsService } from '../../show-details/show-details.service';

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.scss']
})
export class ShowCardComponent implements OnInit {
  @Input() tvShow: any;

  constructor(private showDetailsService: ShowDetailsService) { }

  ngOnInit(): void {

  }

  navigateToDetails(showId: number) {
    // this.router.navigate(['/details']);
    // alert(typeof  showId);
    this.showDetailsService.loadDetails(showId);
    this.showDetailsService.loadSeasons(showId);
  }

}
