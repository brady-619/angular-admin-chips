import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimsPdvPage } from './sims-pdv.page';

const routes: Routes = [
  {
    path: '',
    component: SimsPdvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimsPdvPageRoutingModule {}
