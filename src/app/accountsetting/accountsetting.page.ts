import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accountsetting',
  templateUrl: './accountsetting.page.html',
  styleUrls: ['./accountsetting.page.scss'],
})
export class AccountsettingPage implements OnInit {
  constructor(public router: Router) { }

  ngOnInit() { }

  goToEditProfile() {
    this.router.navigate(['editprofile']);
  }

  goToChangePass() {
    this.router.navigate(['updatepassword']);
  }

  goToNoti() {
    this.router.navigate(['notificationsettings']);
  }

  goToDeleteAcc() {
    this.router.navigate(['deleteaccount']);
  }
}
