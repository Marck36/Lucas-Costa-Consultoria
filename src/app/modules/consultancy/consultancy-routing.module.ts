import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { ConsultancyComponent } from './consultancy.component';

const routes: Routes = [
  {
    path: '', component: ConsultancyComponent,
    children: [
      { path: '', component: HomeComponent, },
      { path: 'home', component: HomeComponent, },
      { path: 'consultancy', component: ConsultancyComponent, },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:  [RouterModule],
})
export class ConsultancyRoutingModule {}
