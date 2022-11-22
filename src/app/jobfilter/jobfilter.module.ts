import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobfilterPageRoutingModule } from './jobfilter-routing.module';

import { JobfilterPage } from './jobfilter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobfilterPageRoutingModule
  ],
  declarations: [JobfilterPage]
})
export class JobfilterPageModule {}
