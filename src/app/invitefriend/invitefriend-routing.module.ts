import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvitefriendPage } from './invitefriend.page';

const routes: Routes = [
  {
    path: '',
    component: InvitefriendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvitefriendPageRoutingModule {}
