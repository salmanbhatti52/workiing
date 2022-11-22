import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Job8PageRoutingModule } from './job8-routing.module';

import { Job8Page } from './job8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Job8PageRoutingModule
  ],
  declarations: [Job8Page]
})
export class Job8PageModule {}
