import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SimsPdvPageRoutingModule } from './sims-pdv-routing.module';

import { SimsPdvPage } from './sims-pdv.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SimsPdvPageRoutingModule,
    Ng2SearchPipeModule
    
  ],
  declarations: [SimsPdvPage]
})
export class SimsPdvPageModule {}
