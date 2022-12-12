import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
// import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { isPlatform } from '@ionic/angular';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  showPass = false;
  constructor(public navCtrl: NavController) { }

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
    this.navCtrl.navigateRoot([
      '/jobslistlogin',
    ]);

  }
}
