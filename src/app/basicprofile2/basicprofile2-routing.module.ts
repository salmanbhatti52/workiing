import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Basicprofile2Page } from './basicprofile2.page';

const routes: Routes = [
  {
    path: '',
    component: Basicprofile2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Basicprofile2PageRoutingModule {}
