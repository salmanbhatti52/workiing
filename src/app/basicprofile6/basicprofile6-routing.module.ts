import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Basicprofile6Page } from './basicprofile6.page';

const routes: Routes = [
  {
    path: '',
    component: Basicprofile6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Basicprofile6PageRoutingModule {}
