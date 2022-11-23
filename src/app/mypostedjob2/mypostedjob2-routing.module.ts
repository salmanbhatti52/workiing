import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mypostedjob2Page } from './mypostedjob2.page';

const routes: Routes = [
  {
    path: '',
    component: Mypostedjob2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mypostedjob2PageRoutingModule {}
