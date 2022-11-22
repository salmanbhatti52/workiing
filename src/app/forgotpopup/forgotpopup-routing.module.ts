import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotpopupPage } from './forgotpopup.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotpopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotpopupPageRoutingModule {}
