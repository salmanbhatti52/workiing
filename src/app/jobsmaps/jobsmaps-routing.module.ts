import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobsmapsPage } from './jobsmaps.page';

const routes: Routes = [
  {
    path: '',
    component: JobsmapsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobsmapsPageRoutingModule {}
