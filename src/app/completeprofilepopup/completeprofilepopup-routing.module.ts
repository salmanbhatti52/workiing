import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompleteprofilepopupPage } from './completeprofilepopup.page';

const routes: Routes = [
  {
    path: '',
    component: CompleteprofilepopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompleteprofilepopupPageRoutingModule {}
