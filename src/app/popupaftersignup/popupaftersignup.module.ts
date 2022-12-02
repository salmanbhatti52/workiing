import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopupaftersignupPageRoutingModule } from './popupaftersignup-routing.module';

import { PopupaftersignupPage } from './popupaftersignup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopupaftersignupPageRoutingModule
  ],
  declarations: [PopupaftersignupPage]
})
export class PopupaftersignupPageModule {}
