import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Job13Page } from './job13.page';

const routes: Routes = [
  {
    path: '',
    component: Job13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Job13PageRoutingModule {}
