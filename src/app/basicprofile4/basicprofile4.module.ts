import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Basicprofile4PageRoutingModule } from './basicprofile4-routing.module';

import { Basicprofile4Page } from './basicprofile4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Basicprofile4PageRoutingModule
  ],
  declarations: [Basicprofile4Page]
})
export class Basicprofile4PageModule {}
