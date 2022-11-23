import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountsettingPage } from './accountsetting.page';

const routes: Routes = [
  {
    path: '',
    component: AccountsettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountsettingPageRoutingModule {}
