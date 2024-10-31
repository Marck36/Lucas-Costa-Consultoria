
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultancyRoutingModule } from './consultancy-routing.module';

import { HeaderComponent } from "./components";

import { HomeComponent } from "./pages";

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent,
    ],
    imports: [
        CommonModule,
        ConsultancyRoutingModule,
    ],
    exports: [
        HeaderComponent,
        HomeComponent,
    ],
    providers: [],

})
export class ConsultancyModule { }