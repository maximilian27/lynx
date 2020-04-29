import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-episodes-dialog',
  templateUrl: './episodes-dialog.component.html',
  styleUrls: ['./episodes-dialog.component.scss']
})
export class EpisodesDialogComponent {

  @Input() episode;

  constructor(public activeModal: NgbActiveModal) {}

}
