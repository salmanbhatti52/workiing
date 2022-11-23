import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyjobinterviewPage } from './myjobinterview.page';

const routes: Routes = [
  {
    path: '',
    component: MyjobinterviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyjobinterviewPageRoutingModule {}
