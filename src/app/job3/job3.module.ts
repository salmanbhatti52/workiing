import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Job3PageRoutingModule } from './job3-routing.module';

import { Job3Page } from './job3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Job3PageRoutingModule
  ],
  declarations: [Job3Page]
})
export class Job3PageModule {}
