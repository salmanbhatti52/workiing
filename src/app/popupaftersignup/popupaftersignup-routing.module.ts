import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopupaftersignupPage } from './popupaftersignup.page';

const routes: Routes = [
  {
    path: '',
    component: PopupaftersignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopupaftersignupPageRoutingModule {}
