import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SimsVendedorDetallePageRoutingModule } from './sims-vendedor-detalle-routing.module';

import { SimsVendedorDetallePage } from './sims-vendedor-detalle.page';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SimsVendedorDetallePageRoutingModule,Ng2SearchPipeModule
  ],
  declarations: [SimsVendedorDetallePage]
})
export class SimsVendedorDetallePageModule {}
