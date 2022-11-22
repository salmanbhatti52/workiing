import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Job4PageRoutingModule } from './job4-routing.module';

import { Job4Page } from './job4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Job4PageRoutingModule
  ],
  declarations: [Job4Page]
})
export class Job4PageModule {}
