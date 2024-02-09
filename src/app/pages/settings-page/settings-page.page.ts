import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.page.html',
  styleUrls: ['./settings-page.page.scss'],
})
export class SettingsPagePage implements OnInit {

  constructor(
    private modalCtlr:ModalController
  ) { }

  ngOnInit() {
    console.log("Running Settings");
  }

  salirModal(){
    this.modalCtlr.dismiss()
  }

}
