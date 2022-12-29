import { LoadingService } from './../services/loading.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
// import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { isPlatform } from '@ionic/angular';
import { RestService } from '../services/rest.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  showPass = false;
  email: any;
  password: any;
  constructor(public navCtrl: NavController,
    public rest: RestService,
    public extra: LoadingService) { }

  ngOnInit() {
    // if (!isPlatform('capacitor')) {
    //   GoogleAuth.initialize();
    // }
  }

  togglePass() {
    this.showPass = !this.showPass;
  }


  async doLogin() {
    // const user = await GoogleAuth.signIn();
    // if (user) {
    //   console.log('user details::', user);

    // }
  }

  forgot() {
    this.navCtrl.navigateForward('forgotpassword');
  }
  signup() {
    this.navCtrl.navigateForward('getstarted');
  }

  login() {
    this.extra.loadershow()
    let datasend = {
      "email": this.email,
      "password": this.password,
    }
    this.rest.sendRequest('signin', datasend).subscribe((res: any) => {
      console.log('response--', res);
      this.extra.hideLoader();
      if (res.status == 'success') {
        this.extra.email = res.data.email
        this.extra.name = res.data.first_name + res.data.last_name
        localStorage.setItem("userdata", JSON.stringify(res.data));
        localStorage.setItem('users_customers_id', res.data.users_customers_id)
        this.navCtrl.navigateRoot([
          '/jobslistlogin',
        ]);
      } else {

        this.extra.presentToast(res.message)
      }

    }, err => {
      console.log(err);

      this.extra.hideLoader();
    })


  }
}
