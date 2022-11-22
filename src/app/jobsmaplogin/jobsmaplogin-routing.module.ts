import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobsmaploginPage } from './jobsmaplogin.page';

const routes: Routes = [
  {
    path: '',
    component: JobsmaploginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobsmaploginPageRoutingModule {}
