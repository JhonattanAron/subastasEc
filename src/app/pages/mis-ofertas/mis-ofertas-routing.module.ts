import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisOfertasPage } from './mis-ofertas.page';

const routes: Routes = [
  {
    path: '',
    component: MisOfertasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisOfertasPageRoutingModule {}
