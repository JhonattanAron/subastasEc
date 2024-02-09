import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';



@Component({
  selector: 'app-modal-settings',
  templateUrl: './modal-settings.component.html',
  styleUrls: ['./modal-settings.component.scss'],
  standalone: true,
  imports: [IonicModule]

})
export class ModalSettingsComponent  implements OnInit {
  

  constructor() { }
  protected isOpen:boolean = false;

  ngOnInit() {
    console.log("");
    
  }

  setOpen(open: boolean){
    this.isOpen = open;
  }
  

}
