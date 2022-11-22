import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompleteprofilepopupPageRoutingModule } from './completeprofilepopup-routing.module';

import { CompleteprofilepopupPage } from './completeprofilepopup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompleteprofilepopupPageRoutingModule
  ],
  declarations: [CompleteprofilepopupPage]
})
export class CompleteprofilepopupPageModule {}
