import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotpopupPageRoutingModule } from './forgotpopup-routing.module';

import { ForgotpopupPage } from './forgotpopup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotpopupPageRoutingModule
  ],
  declarations: [ForgotpopupPage]
})
export class ForgotpopupPageModule {}
