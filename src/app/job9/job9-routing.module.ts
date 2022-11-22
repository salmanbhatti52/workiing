import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Job9Page } from './job9.page';

const routes: Routes = [
  {
    path: '',
    component: Job9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Job9PageRoutingModule {}
