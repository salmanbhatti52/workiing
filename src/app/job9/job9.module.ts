import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Job9PageRoutingModule } from './job9-routing.module';

import { Job9Page } from './job9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Job9PageRoutingModule
  ],
  declarations: [Job9Page]
})
export class Job9PageModule {}
