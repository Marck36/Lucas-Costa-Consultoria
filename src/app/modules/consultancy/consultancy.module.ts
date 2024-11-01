import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ConsultancyRoutingModule } from './consultancy-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ConsultancyComponent } from './consultancy.component';


@NgModule({
    declarations: [
      ConsultancyComponent,
    ],
    imports: [
      CommonModule,
      SharedModule,
      ConsultancyRoutingModule,
    ],
    exports: [
        ConsultancyComponent,
    ],
  })
  export class ConsultancyModule { }
  