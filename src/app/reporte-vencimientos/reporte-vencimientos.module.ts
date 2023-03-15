import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReporteVencimientosPageRoutingModule } from './reporte-vencimientos-routing.module';

import { ReporteVencimientosPage } from './reporte-vencimientos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReporteVencimientosPageRoutingModule
  ],
  declarations: [ReporteVencimientosPage]
})
export class ReporteVencimientosPageModule {}
