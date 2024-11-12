import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ConsultancyRoutingModule } from './consultancy-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ConsultancyComponent } from './consultancy.component';
import { HomeComponent } from './pages';


@NgModule({
    declarations: [
      ConsultancyComponent,
      HomeComponent,
    ],
    imports: [
      CommonModule,
      SharedModule,
      ConsultancyRoutingModule,
    ],
    exports: [
      ConsultancyComponent,
      HomeComponent,
    ],
  })
  export class ConsultancyModule { }
