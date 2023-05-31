import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PuntosDeVentaPageRoutingModule } from './puntos-de-venta-routing.module';

import { PuntosDeVentaPage } from './puntos-de-venta.page';
import {MatPaginatorModule} from '@angular/material/paginator';


import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PuntosDeVentaPageRoutingModule,
    MatTableModule ,MatPaginatorModule,MatInputModule,MatSortModule
  ],
  declarations: [PuntosDeVentaPage]
})
export class PuntosDeVentaPageModule {}
