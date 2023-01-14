import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExistenciasPorVendedorPage } from './existencias-por-vendedor.page';

const routes: Routes = [
  {
    path: '',
    component: ExistenciasPorVendedorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExistenciasPorVendedorPageRoutingModule {}
