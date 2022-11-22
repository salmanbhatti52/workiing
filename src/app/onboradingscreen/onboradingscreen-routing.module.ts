import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnboradingscreenPage } from './onboradingscreen.page';

const routes: Routes = [
  {
    path: '',
    component: OnboradingscreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnboradingscreenPageRoutingModule {}
