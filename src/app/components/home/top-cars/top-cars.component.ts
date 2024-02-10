import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-top-cars',
  templateUrl: './top-cars.component.html',
  styleUrls: ['./top-cars.component.scss'],
  standalone:true,
  imports:[IonicModule]
})
export class TopCarsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("Top Cars Running");
    
  }

}
