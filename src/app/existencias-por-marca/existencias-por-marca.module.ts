import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExistenciasPorMarcaPageRoutingModule } from './existencias-por-marca-routing.module';

import { ExistenciasPorMarcaPage } from './existencias-por-marca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExistenciasPorMarcaPageRoutingModule
  ],
  declarations: [ExistenciasPorMarcaPage]
})
export class ExistenciasPorMarcaPageModule {}
