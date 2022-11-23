import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mypostedjob1Page } from './mypostedjob1.page';

const routes: Routes = [
  {
    path: '',
    component: Mypostedjob1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mypostedjob1PageRoutingModule {}
