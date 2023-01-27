import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SimsVendedorPageRoutingModule } from './sims-vendedor-routing.module';

import { SimsVendedorPage } from './sims-vendedor.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SimsVendedorPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [SimsVendedorPage]
})
export class SimsVendedorPageModule {}
