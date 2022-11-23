import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountsettingPageRoutingModule } from './accountsetting-routing.module';

import { AccountsettingPage } from './accountsetting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountsettingPageRoutingModule
  ],
  declarations: [AccountsettingPage]
})
export class AccountsettingPageModule {}
