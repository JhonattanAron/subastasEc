import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubastarPageRoutingModule } from './subastar-routing.module';

import { SubastarPage } from './subastar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubastarPageRoutingModule
  ],
  declarations: [SubastarPage]
})
export class SubastarPageModule {}
