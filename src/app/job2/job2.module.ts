import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Job2PageRoutingModule } from './job2-routing.module';

import { Job2Page } from './job2.page';
import { NgOtpInputModule } from 'ng-otp-input';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Job2PageRoutingModule,
    NgOtpInputModule
  ],
  declarations: [Job2Page]
})
export class Job2PageModule { }
