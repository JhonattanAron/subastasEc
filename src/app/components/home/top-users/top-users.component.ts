import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-top-users',
  templateUrl: './top-users.component.html',
  styleUrls: ['./top-users.component.scss'],
  standalone:true,
  imports:[IonicModule]
})
export class TopUsersComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("Top Users Found");
    
  }


}
