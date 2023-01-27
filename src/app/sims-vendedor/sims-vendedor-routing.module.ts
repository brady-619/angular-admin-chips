import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimsVendedorPage } from './sims-vendedor.page';

const routes: Routes = [
  {
    path: '',
    component: SimsVendedorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimsVendedorPageRoutingModule {}
