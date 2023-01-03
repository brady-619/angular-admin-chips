import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizaVendedorPage } from './actualiza-vendedor.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizaVendedorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizaVendedorPageRoutingModule {}
