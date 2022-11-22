import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobslistloginPage } from './jobslistlogin.page';

const routes: Routes = [
  {
    path: '',
    component: JobslistloginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobslistloginPageRoutingModule {}
