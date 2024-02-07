import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubastarPage } from './subastar.page';

const routes: Routes = [
  {
    path: '',
    component: SubastarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubastarPageRoutingModule {}
