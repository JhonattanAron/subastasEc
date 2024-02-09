import { Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-user-data-image',
  templateUrl: './user-data-image.component.html',
  styleUrls: ['./user-data-image.component.scss'],
  standalone: true,
  imports: [MatTabsModule , IonicModule],
})
export class UserDataImageComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("UserDataImageComponent");
    
  }

}
