import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



export const routes: Routes = [
  {
    path: 'consultancy',
    loadChildren: () => import('./modules/consultancy/consultancy.module').then((m) => m.ConsultancyModule),
  },
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'disabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
