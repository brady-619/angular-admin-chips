import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IccPageRoutingModule } from './icc-routing.module';

import { IccPage } from './icc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IccPageRoutingModule
  ],
  declarations: [IccPage]
})
export class IccPageModule {}
