import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobslistloginPageRoutingModule } from './jobslistlogin-routing.module';

import { JobslistloginPage } from './jobslistlogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobslistloginPageRoutingModule
  ],
  declarations: [JobslistloginPage]
})
export class JobslistloginPageModule {}
