import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-rating',
  templateUrl: './custom-rating.component.html',
  styleUrls: ['./custom-rating.component.scss']
})
export class CustomRatingComponent  {
    @Input() rate: number;
    constructor() { }

}
