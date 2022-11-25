import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeprofilePageRoutingModule } from './employeprofile-routing.module';

import { EmployeprofilePage } from './employeprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeprofilePageRoutingModule
  ],
  declarations: [EmployeprofilePage]
})
export class EmployeprofilePageModule {}
