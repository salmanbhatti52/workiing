import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Job2PageRoutingModule } from './job2-routing.module';

import { Job2Page } from './job2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Job2PageRoutingModule
  ],
  declarations: [Job2Page]
})
export class Job2PageModule {}
