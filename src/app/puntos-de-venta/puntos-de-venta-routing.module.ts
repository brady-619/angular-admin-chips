import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PuntosDeVentaPage } from './puntos-de-venta.page';

const routes: Routes = [
  {
    path: '',
    component: PuntosDeVentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PuntosDeVentaPageRoutingModule {}
