import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Basicprofile3Page } from './basicprofile3.page';

const routes: Routes = [
  {
    path: '',
    component: Basicprofile3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Basicprofile3PageRoutingModule {}
