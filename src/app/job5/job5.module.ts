import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Job5PageRoutingModule } from './job5-routing.module';

import { Job5Page } from './job5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Job5PageRoutingModule
  ],
  declarations: [Job5Page]
})
export class Job5PageModule {}
