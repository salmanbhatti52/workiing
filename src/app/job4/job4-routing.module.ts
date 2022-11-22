import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Job4Page } from './job4.page';

const routes: Routes = [
  {
    path: '',
    component: Job4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Job4PageRoutingModule {}
