import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Basicprofile5PageRoutingModule } from './basicprofile5-routing.module';

import { Basicprofile5Page } from './basicprofile5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Basicprofile5PageRoutingModule
  ],
  declarations: [Basicprofile5Page]
})
export class Basicprofile5PageModule {}
