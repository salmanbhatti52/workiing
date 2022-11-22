import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnboradingscreenPageRoutingModule } from './onboradingscreen-routing.module';

import { OnboradingscreenPage } from './onboradingscreen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnboradingscreenPageRoutingModule
  ],
  declarations: [OnboradingscreenPage]
})
export class OnboradingscreenPageModule {}
