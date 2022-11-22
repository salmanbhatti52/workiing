import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {
  otp: any;

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  onOtpChange(event: any) {
    console.log(event, "eventevent");
    this.otp = event;
  }

  next() {
    this.navCtrl.navigateForward('resetpassword')
  }


}
