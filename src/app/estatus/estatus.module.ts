import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstatusPageRoutingModule } from './estatus-routing.module';

import { EstatusPage } from './estatus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstatusPageRoutingModule
  ],
  declarations: [EstatusPage]
})
export class EstatusPageModule {}
