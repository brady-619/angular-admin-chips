import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstatusPage } from './estatus.page';

const routes: Routes = [
  {
    path: '',
    component: EstatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstatusPageRoutingModule {}
