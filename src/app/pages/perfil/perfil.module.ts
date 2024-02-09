import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPageRoutingModule } from './perfil-routing.module';

import { PerfilPage } from './perfil.page';

//Components
import { UserDataImageComponent } from 'src/app/components/profile/user-data-image/user-data-image.component';
import { ModalSettingsComponent } from 'src/app/components/profile/modal-settings/modal-settings.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPageRoutingModule , UserDataImageComponent , ModalSettingsComponent
  ],
  declarations: [PerfilPage ]
})
export class PerfilPageModule {}
