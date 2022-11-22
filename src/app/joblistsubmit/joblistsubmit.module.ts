import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JoblistsubmitPageRoutingModule } from './joblistsubmit-routing.module';

import { JoblistsubmitPage } from './joblistsubmit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JoblistsubmitPageRoutingModule
  ],
  declarations: [JoblistsubmitPage]
})
export class JoblistsubmitPageModule {}
