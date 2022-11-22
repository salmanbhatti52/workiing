import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Job12PageRoutingModule } from './job12-routing.module';

import { Job12Page } from './job12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Job12PageRoutingModule
  ],
  declarations: [Job12Page]
})
export class Job12PageModule {}
