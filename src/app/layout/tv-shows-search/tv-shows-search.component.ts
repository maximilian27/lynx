import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv-shows-search',
  templateUrl: './tv-shows-search.component.html',
  styleUrls: ['./tv-shows-search.component.scss']
})
export class TvShowsSearchComponent implements OnInit {
  public searchValue: string;
  public tvShows: any[];

  constructor() {
    this.tvShows = [1, 2, 3, 4];
  }

  ngOnInit(): void {

  }

  onSearchValueChange(value) {
    this.searchValue = value;
  }

}
