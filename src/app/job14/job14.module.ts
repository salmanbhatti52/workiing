import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Job14PageRoutingModule } from './job14-routing.module';

import { Job14Page } from './job14.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Job14PageRoutingModule
  ],
  declarations: [Job14Page]
})
export class Job14PageModule {}
