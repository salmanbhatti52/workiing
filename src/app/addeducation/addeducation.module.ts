import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddeducationPageRoutingModule } from './addeducation-routing.module';

import { AddeducationPage } from './addeducation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddeducationPageRoutingModule
  ],
  declarations: [AddeducationPage]
})
export class AddeducationPageModule {}
