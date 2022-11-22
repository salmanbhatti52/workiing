import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Job11Page } from './job11.page';

const routes: Routes = [
  {
    path: '',
    component: Job11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Job11PageRoutingModule {}
