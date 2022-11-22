import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobfilterPage } from './jobfilter.page';

const routes: Routes = [
  {
    path: '',
    component: JobfilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobfilterPageRoutingModule {}
