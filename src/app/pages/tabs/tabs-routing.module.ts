import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from 'src/app/home/home.page';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path:"home",
        loadChildren: ()=> import("./../../home/home.module").then( m => m.HomePageModule),
      },
      {
        path: 'explorar',
        loadChildren: () => import('./../../pages/explorar/explorar.module').then( m => m.ExplorarPageModule)
      },
      {
        path: 'subastar',
        loadChildren: () => import('./../../pages/subastar/subastar.module').then( m => m.SubastarPageModule)
      },
      {
        path: 'mis-ofertas',
        loadChildren: () => import('./../../pages/mis-ofertas/mis-ofertas.module').then( m => m.MisOfertasPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('./../../pages/perfil/perfil.module').then( m => m.PerfilPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
