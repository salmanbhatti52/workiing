import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Job12Page } from './job12.page';

const routes: Routes = [
  {
    path: '',
    component: Job12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Job12PageRoutingModule {}
