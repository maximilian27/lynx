import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomRatingComponent } from './custom-rating/custom-rating.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
    declarations: [CustomRatingComponent],
    imports: [
        CommonModule,
        NgbModule
      ],
   exports: [
      CustomRatingComponent,
      NgbModule
   ]
})
export class SharedModule { }
