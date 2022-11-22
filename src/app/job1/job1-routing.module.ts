import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Job1Page } from './job1.page';

const routes: Routes = [
  {
    path: '',
    component: Job1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Job1PageRoutingModule {}
