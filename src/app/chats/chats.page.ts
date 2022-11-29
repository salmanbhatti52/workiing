import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {

  constructor(public router: Router,
    public location: Location) { }

  ngOnInit() {
  }
  goToOtheUserProfileDetail() {
    this.router.navigate(['employeprofile'])
  }

  goBack() {
    this.location.back()
  }

}
