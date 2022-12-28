import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaitPageRoutingModule } from './bait-routing.module';

import { BaitPage } from './bait.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaitPageRoutingModule
  ],
  declarations: [BaitPage]
})
export class BaitPageModule {}
