import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Job11PageRoutingModule } from './job11-routing.module';

import { Job11Page } from './job11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Job11PageRoutingModule
  ],
  declarations: [Job11Page]
})
export class Job11PageModule {}
