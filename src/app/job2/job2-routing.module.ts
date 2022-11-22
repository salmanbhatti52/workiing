import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Job2Page } from './job2.page';

const routes: Routes = [
  {
    path: '',
    component: Job2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Job2PageRoutingModule {}
