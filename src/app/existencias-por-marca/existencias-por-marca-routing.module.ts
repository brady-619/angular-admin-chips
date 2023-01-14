import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExistenciasPorMarcaPage } from './existencias-por-marca.page';

const routes: Routes = [
  {
    path: '',
    component: ExistenciasPorMarcaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExistenciasPorMarcaPageRoutingModule {}
