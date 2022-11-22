import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobcatPage } from './jobcat.page';

const routes: Routes = [
  {
    path: '',
    component: JobcatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobcatPageRoutingModule {}
