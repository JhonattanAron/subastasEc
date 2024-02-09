import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-image-user',
  templateUrl: './image-user.component.html',
  styleUrls: ['./image-user.component.scss'],
  standalone:true,
  imports:[IonicModule]
})
export class ImageUserComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("Profile Running");
    
  }

}
