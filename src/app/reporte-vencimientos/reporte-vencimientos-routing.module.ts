import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReporteVencimientosPage } from './reporte-vencimientos.page';

const routes: Routes = [
  {
    path: '',
    component: ReporteVencimientosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReporteVencimientosPageRoutingModule {}
