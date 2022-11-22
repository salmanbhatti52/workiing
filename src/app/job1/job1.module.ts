import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Job1PageRoutingModule } from './job1-routing.module';

import { Job1Page } from './job1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Job1PageRoutingModule
  ],
  declarations: [Job1Page]
})
export class Job1PageModule {}
