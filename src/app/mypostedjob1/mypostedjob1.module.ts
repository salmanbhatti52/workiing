import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mypostedjob1PageRoutingModule } from './mypostedjob1-routing.module';

import { Mypostedjob1Page } from './mypostedjob1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mypostedjob1PageRoutingModule
  ],
  declarations: [Mypostedjob1Page]
})
export class Mypostedjob1PageModule {}
