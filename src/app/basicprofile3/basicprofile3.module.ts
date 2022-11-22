import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Basicprofile3PageRoutingModule } from './basicprofile3-routing.module';

import { Basicprofile3Page } from './basicprofile3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Basicprofile3PageRoutingModule
  ],
  declarations: [Basicprofile3Page]
})
export class Basicprofile3PageModule {}
