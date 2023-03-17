import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReporteVencimientosPageRoutingModule } from './reporte-vencimientos-routing.module';

import { ReporteVencimientosPage } from './reporte-vencimientos.page';


import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';


import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';

@NgModule({
  imports: [
    CommonModule,MatTableModule,MatPaginatorModule,
    FormsModule,MatInputModule,
    IonicModule,MatSortModule,
    ReporteVencimientosPageRoutingModule
  ],
  declarations: [ReporteVencimientosPage]
})
export class ReporteVencimientosPageModule {}
