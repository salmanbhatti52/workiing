import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accountsetting',
  templateUrl: './accountsetting.page.html',
  styleUrls: ['./accountsetting.page.scss'],
})
export class AccountsettingPage implements OnInit {
  constructor(public router: Router) {}

  ngOnInit() {}

  goToEditProfile() {
    this.router.navigate(['page']);
  }

  goToChangePass() {
    this.router.navigate(['page']);
  }

  goToNoti() {
    this.router.navigate(['page']);
  }

  goToDeleteAcc() {
    this.router.navigate(['page']);
  }
}
