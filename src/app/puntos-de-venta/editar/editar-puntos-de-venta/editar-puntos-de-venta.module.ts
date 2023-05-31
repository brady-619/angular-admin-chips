import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarPuntosDeVentaPageRoutingModule } from './editar-puntos-de-venta-routing.module';

import { EditarPuntosDeVentaPage } from './editar-puntos-de-venta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarPuntosDeVentaPageRoutingModule
  ],
  declarations: [EditarPuntosDeVentaPage]
})
export class EditarPuntosDeVentaPageModule {}
