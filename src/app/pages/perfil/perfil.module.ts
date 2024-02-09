import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPageRoutingModule } from './perfil-routing.module';

import { PerfilPage } from './perfil.page';

//Components
import { UserDataImageComponent } from 'src/app/components/profile/user-data-image/user-data-image.component';
import { ImageUserComponent } from 'src/app/components/profile/image-user/image-user.component';
import { SettingRouteComponent } from 'src/app/components/profile/setting-route/setting-route.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPageRoutingModule , UserDataImageComponent ,
    ImageUserComponent , SettingRouteComponent,
  ],
  declarations: [PerfilPage ]
})
export class PerfilPageModule {}
