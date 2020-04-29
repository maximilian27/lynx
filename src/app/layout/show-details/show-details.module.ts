import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowDetailsComponent } from './show-details.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
    declarations: [ShowDetailsComponent],
    exports: [ShowDetailsComponent],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule
    ]
})
export class ShowDetailsModule { }
