import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  standalone:true,
  imports:[IonicModule]
})
export class CategoriesComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("Catefories ar running");
    
  }

}
