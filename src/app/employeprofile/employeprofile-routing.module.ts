import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeprofilePage } from './employeprofile.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeprofilePageRoutingModule {}
