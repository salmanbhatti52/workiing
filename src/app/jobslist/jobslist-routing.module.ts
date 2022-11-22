import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobslistPage } from './jobslist.page';

const routes: Routes = [
  {
    path: '',
    component: JobslistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobslistPageRoutingModule {}
