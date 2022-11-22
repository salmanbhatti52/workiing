import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Basicprofile2PageRoutingModule } from './basicprofile2-routing.module';

import { Basicprofile2Page } from './basicprofile2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Basicprofile2PageRoutingModule
  ],
  declarations: [Basicprofile2Page]
})
export class Basicprofile2PageModule {}
