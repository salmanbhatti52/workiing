import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mypostedjob2PageRoutingModule } from './mypostedjob2-routing.module';

import { Mypostedjob2Page } from './mypostedjob2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mypostedjob2PageRoutingModule
  ],
  declarations: [Mypostedjob2Page]
})
export class Mypostedjob2PageModule {}
