import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notificationsettings',
  templateUrl: './notificationsettings.page.html',
  styleUrls: ['./notificationsettings.page.scss'],
})
export class NotificationsettingsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toogle(ev: any) {


    console.log(ev);

  }

}
