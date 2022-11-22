import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Job13PageRoutingModule } from './job13-routing.module';

import { Job13Page } from './job13.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Job13PageRoutingModule
  ],
  declarations: [Job13Page]
})
export class Job13PageModule {}
