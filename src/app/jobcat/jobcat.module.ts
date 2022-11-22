import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobcatPageRoutingModule } from './jobcat-routing.module';

import { JobcatPage } from './jobcat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobcatPageRoutingModule
  ],
  declarations: [JobcatPage]
})
export class JobcatPageModule {}
