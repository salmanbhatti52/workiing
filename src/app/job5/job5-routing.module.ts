import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Job5Page } from './job5.page';

const routes: Routes = [
  {
    path: '',
    component: Job5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Job5PageRoutingModule {}
