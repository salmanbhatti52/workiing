import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyjobpedningPage } from './myjobpedning.page';

const routes: Routes = [
  {
    path: '',
    component: MyjobpedningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyjobpedningPageRoutingModule {}
