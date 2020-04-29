import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowEpisodesComponent } from './show-episodes.component';
import { EpisodesDialogComponent } from './episodes-dialog/episodes-dialog.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
    declarations: [ShowEpisodesComponent, EpisodesDialogComponent],
    imports: [
        CommonModule,
        SharedModule
    ],
    exports: [ShowEpisodesComponent],
    entryComponents: [EpisodesDialogComponent]
})
export class ShowEpisodesModule { }
