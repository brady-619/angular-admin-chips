import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EliminaRegistroPageRoutingModule } from './elimina-registro-routing.module';

import { EliminaRegistroPage } from './elimina-registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliminaRegistroPageRoutingModule
  ],
  declarations: [EliminaRegistroPage]
})
export class EliminaRegistroPageModule {}
