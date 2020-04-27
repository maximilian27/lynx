import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.scss']
})
export class ShowCardComponent implements OnInit {
  @Input() tvShow: any;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  navigateToDetails() {
    this.router.navigate(['/details']);
  }

}
