import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicprofilePage } from './basicprofile.page';

const routes: Routes = [
  {
    path: '',
    component: BasicprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicprofilePageRoutingModule {}
