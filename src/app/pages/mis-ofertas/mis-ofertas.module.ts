import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisOfertasPageRoutingModule } from './mis-ofertas-routing.module';

import { MisOfertasPage } from './mis-ofertas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisOfertasPageRoutingModule
  ],
  declarations: [MisOfertasPage]
})
export class MisOfertasPageModule {}
