import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExistenciasPorVendedorPageRoutingModule } from './existencias-por-vendedor-routing.module';

import { ExistenciasPorVendedorPage } from './existencias-por-vendedor.page';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExistenciasPorVendedorPageRoutingModule,ReactiveFormsModule
  ],
  declarations: [ExistenciasPorVendedorPage]
})
export class ExistenciasPorVendedorPageModule {}
