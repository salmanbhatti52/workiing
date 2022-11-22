import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobsmapsPageRoutingModule } from './jobsmaps-routing.module';

import { JobsmapsPage } from './jobsmaps.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobsmapsPageRoutingModule
  ],
  declarations: [JobsmapsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class JobsmapsPageModule { }
