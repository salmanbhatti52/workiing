import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobsmaploginPageRoutingModule } from './jobsmaplogin-routing.module';

import { JobsmaploginPage } from './jobsmaplogin.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobsmaploginPageRoutingModule
  ],
  declarations: [JobsmaploginPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class JobsmaploginPageModule { }
