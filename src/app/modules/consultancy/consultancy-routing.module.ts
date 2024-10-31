import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ConsultancyComponent } from './consultancy.component';
import { HomeComponent } from './pages';

const routes: Routes = [
  {
    path: '', component: ConsultancyComponent,
    children: [
      { path: '', component: HomeComponent, },
      { path: 'home', component: HomeComponent, },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:  [RouterModule],
})
export class ConsultancyRoutingModule {}
