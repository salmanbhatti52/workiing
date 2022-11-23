import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyjobshortlistPage } from './myjobshortlist.page';

const routes: Routes = [
  {
    path: '',
    component: MyjobshortlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyjobshortlistPageRoutingModule {}
