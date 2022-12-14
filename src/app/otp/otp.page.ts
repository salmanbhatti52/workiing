import { LoadingService } from './../services/loading.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {
  otp: any;
  maxTime = 2;
  timer: any;
  time: any;
  seconds: any;
  optget: any;
  constructor(public navCtrl: NavController,
    public extra: LoadingService) {
    this.optget = localStorage.getItem('otp');
  }

  ngOnInit() {
    this.time = this.maxTime * 60

    // setInterval(() => {
    //   this.updatetimevalue();
    // }, 1000)
  }

  // updatetimevalue() {
  //   const minutes = Math.floor(this.time / 60);
  //   this.seconds = this.time % 60;

  //   this.seconds = this.seconds < 10 ? '0' + this.seconds : this.seconds;

  //   this.timer = minutes + ":" + this.seconds;
  //   this.time--;

  //   console.log(this.timer);

  // }
  onOtpChange(event: any) {
    console.log(event, "eventevent");
    this.otp = event;
  }

  next() {
    if (this.otp == this.optget) {
      this.navCtrl.navigateForward('resetpassword')
    } else {
      this.extra.presentToast('Otp doesnot match');
    }

  }


}
