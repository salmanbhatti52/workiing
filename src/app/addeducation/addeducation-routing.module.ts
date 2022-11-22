import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddeducationPage } from './addeducation.page';

const routes: Routes = [
  {
    path: '',
    component: AddeducationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddeducationPageRoutingModule {}
