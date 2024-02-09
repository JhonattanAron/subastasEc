import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'explorar',
    loadChildren: () => import('./pages/explorar/explorar.module').then( m => m.ExplorarPageModule)
  },
  {
    path: 'subastar',
    loadChildren: () => import('./pages/subastar/subastar.module').then( m => m.SubastarPageModule)
  },
  {
    path: 'mis-ofertas',
    loadChildren: () => import('./pages/mis-ofertas/mis-ofertas.module').then( m => m.MisOfertasPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'settings-page',
    loadChildren: () => import('./pages/settings-page/settings-page.module').then( m => m.SettingsPagePageModule)
  },

  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
