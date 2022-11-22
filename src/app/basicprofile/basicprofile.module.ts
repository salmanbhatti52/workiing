import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasicprofilePageRoutingModule } from './basicprofile-routing.module';

import { BasicprofilePage } from './basicprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasicprofilePageRoutingModule
  ],
  declarations: [BasicprofilePage]
})
export class BasicprofilePageModule {}
