import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

// Components
import { CategoriesComponent } from '../components/home/categories/categories.component';
import { TopCarsComponent } from '../components/home/top-cars/top-cars.component';
import { TopUsersComponent } from '../components/home/top-users/top-users.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule , CategoriesComponent
    ,TopCarsComponent, TopUsersComponent
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
