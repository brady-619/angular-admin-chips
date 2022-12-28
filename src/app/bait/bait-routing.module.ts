import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaitPage } from './bait.page';

const routes: Routes = [
  {
    path: '',
    component: BaitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaitPageRoutingModule {}
