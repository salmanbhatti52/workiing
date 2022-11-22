import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Job8Page } from './job8.page';

const routes: Routes = [
  {
    path: '',
    component: Job8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Job8PageRoutingModule {}
