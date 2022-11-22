import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Job14Page } from './job14.page';

const routes: Routes = [
  {
    path: '',
    component: Job14Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Job14PageRoutingModule {}
