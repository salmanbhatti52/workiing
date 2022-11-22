import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Basicprofile5Page } from './basicprofile5.page';

const routes: Routes = [
  {
    path: '',
    component: Basicprofile5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Basicprofile5PageRoutingModule {}
