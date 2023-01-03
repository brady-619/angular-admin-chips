import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EliminaRegistroPage } from './elimina-registro.page';

const routes: Routes = [
  {
    path: '',
    component: EliminaRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EliminaRegistroPageRoutingModule {}
