import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizaVendedorPageRoutingModule } from './actualiza-vendedor-routing.module';

import { ActualizaVendedorPage } from './actualiza-vendedor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizaVendedorPageRoutingModule
  ],
  declarations: [ActualizaVendedorPage]
})
export class ActualizaVendedorPageModule {}
