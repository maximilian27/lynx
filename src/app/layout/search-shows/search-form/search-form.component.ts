import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  @Output() searchValueChange: EventEmitter<string>;
  public faSearch;
  public searchValue: string;

  constructor() {
    this.faSearch = faSearch;
    this.searchValueChange = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.searchValueChange.emit(this.searchValue);
  }
}
