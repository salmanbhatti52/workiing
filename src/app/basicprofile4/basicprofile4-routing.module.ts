import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Basicprofile4Page } from './basicprofile4.page';

const routes: Routes = [
  {
    path: '',
    component: Basicprofile4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Basicprofile4PageRoutingModule {}
