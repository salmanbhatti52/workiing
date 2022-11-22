import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Basicprofile6PageRoutingModule } from './basicprofile6-routing.module';

import { Basicprofile6Page } from './basicprofile6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Basicprofile6PageRoutingModule
  ],
  declarations: [Basicprofile6Page]
})
export class Basicprofile6PageModule {}
