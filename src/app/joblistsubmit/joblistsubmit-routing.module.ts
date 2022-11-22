import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JoblistsubmitPage } from './joblistsubmit.page';

const routes: Routes = [
  {
    path: '',
    component: JoblistsubmitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JoblistsubmitPageRoutingModule {}
