import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowEpisodesComponent } from './show-episodes.component';
import { EpisodesDialogComponent } from './episodes-dialog/episodes-dialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
    declarations: [ShowEpisodesComponent, EpisodesDialogComponent],
    imports: [
      CommonModule,
      NgbModule
    ],
    exports: [ShowEpisodesComponent],
    entryComponents: [EpisodesDialogComponent]
})
export class ShowEpisodesModule { }
