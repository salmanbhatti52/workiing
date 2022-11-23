import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyjobpedningPageRoutingModule } from './myjobpedning-routing.module';

import { MyjobpedningPage } from './myjobpedning.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyjobpedningPageRoutingModule
  ],
  declarations: [MyjobpedningPage]
})
export class MyjobpedningPageModule {}
