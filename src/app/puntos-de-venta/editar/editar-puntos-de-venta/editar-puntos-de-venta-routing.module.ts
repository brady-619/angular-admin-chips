import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarPuntosDeVentaPage } from './editar-puntos-de-venta.page';

const routes: Routes = [
  {
    path: '',
    component: EditarPuntosDeVentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarPuntosDeVentaPageRoutingModule {}
