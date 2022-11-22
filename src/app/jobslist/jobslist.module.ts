import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobslistPageRoutingModule } from './jobslist-routing.module';

import { JobslistPage } from './jobslist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobslistPageRoutingModule
  ],
  declarations: [JobslistPage]
})
export class JobslistPageModule {}
