import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimsVendedorDetallePage } from './sims-vendedor-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: SimsVendedorDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimsVendedorDetallePageRoutingModule {}
