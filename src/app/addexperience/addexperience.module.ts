import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddexperiencePageRoutingModule } from './addexperience-routing.module';

import { AddexperiencePage } from './addexperience.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddexperiencePageRoutingModule
  ],
  declarations: [AddexperiencePage]
})
export class AddexperiencePageModule {}
