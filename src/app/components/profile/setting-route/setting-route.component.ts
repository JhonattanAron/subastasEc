import { Component, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { SettingsPagePage } from 'src/app/pages/settings-page/settings-page.page';

@Component({
  selector: 'app-setting-route',
  templateUrl: './setting-route.component.html',
  styleUrls: ['./setting-route.component.scss'],
  standalone:true,
  imports:[IonicModule]
})
export class SettingRouteComponent  implements OnInit {

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
    console.log("Setting Route Found");
  }

  async abrirModal(){
    const modal = await this.modalCtrl.create({
      component:SettingsPagePage,
      componentProps:{
        nombre:"Settings",
        context:"Global"
      }
    })

    await modal.present();
  }

}
