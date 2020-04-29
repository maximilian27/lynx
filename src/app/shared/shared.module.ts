import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomRatingComponent } from './custom-rating/custom-rating.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
    declarations: [CustomRatingComponent],
    imports: [
        CommonModule,
        NgbModule,
        FontAwesomeModule
      ],
    exports: [
        CustomRatingComponent,
        NgbModule,
        FontAwesomeModule
    ]
})
export class SharedModule { }
