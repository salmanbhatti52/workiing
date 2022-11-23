import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvitefriendPageRoutingModule } from './invitefriend-routing.module';

import { InvitefriendPage } from './invitefriend.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvitefriendPageRoutingModule
  ],
  declarations: [InvitefriendPage]
})
export class InvitefriendPageModule {}
