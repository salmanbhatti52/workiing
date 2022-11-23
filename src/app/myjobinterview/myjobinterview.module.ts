import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyjobinterviewPageRoutingModule } from './myjobinterview-routing.module';

import { MyjobinterviewPage } from './myjobinterview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyjobinterviewPageRoutingModule
  ],
  declarations: [MyjobinterviewPage]
})
export class MyjobinterviewPageModule {}
