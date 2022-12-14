import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RestService } from '../services/rest.service';
import { LoadingService } from './../services/loading.service';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.page.html',
  styleUrls: ['./resetpassword.page.scss'],
})
export class ResetpasswordPage implements OnInit {
  showPass = false;
  cshowPass = false;
  email: any;
  otp: any;
  password: any;
  confirmpassword: any;
  usss: any;
  userdetail: any;
  constructor(public navCtrl: NavController,
    public rest: RestService,
    public extra: LoadingService) { }

  ngOnInit() {
    this.usss = localStorage.getItem('userdata');
    this.userdetail = JSON.parse(this.usss);
    console.log(this.userdetail);

    this.email = this.userdetail.email
    console.log(this.email);
    this.otp = localStorage.getItem('otp');
  }

  togglePass() {
    this.showPass = !this.showPass;
  }
  ctogglePass() {
    this.cshowPass = !this.cshowPass;
  }

  reset() {
    let datasend = {
      "email": this.email,
      "otp": this.otp,
      "password": this.password,
      "confirm_password": this.confirmpassword
    }
    this.rest.sendRequest('modify_password', datasend).subscribe((res: any) => {
      console.log('response--', res);
      this.extra.hideLoader();
      if (res.status == 'success') {
        this.navCtrl.navigateForward('signin');
      } else {

        this.extra.presentToast(res.message);
      }

    }, err => {
      console.log(err);

      this.extra.hideLoader();
    })


  }

}
