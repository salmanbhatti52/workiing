import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notificationsettings',
  templateUrl: './notificationsettings.page.html',
  styleUrls: ['./notificationsettings.page.scss'],
})
export class NotificationsettingsPage implements OnInit {

  constructor(public location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back()
  }

  toogle(ev: any) {


    console.log(ev);

  }

}
