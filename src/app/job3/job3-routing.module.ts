import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Job3Page } from './job3.page';

const routes: Routes = [
  {
    path: '',
    component: Job3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Job3PageRoutingModule {}
