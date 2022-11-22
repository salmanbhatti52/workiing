import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobsmaploginPageRoutingModule } from './jobsmaplogin-routing.module';

import { JobsmaploginPage } from './jobsmaplogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobsmaploginPageRoutingModule
  ],
  declarations: [JobsmaploginPage]
})
export class JobsmaploginPageModule {}
