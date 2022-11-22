import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  showPass = false;
  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  togglePass() {
    this.showPass = !this.showPass;
  }

  forgot() {
    this.navCtrl.navigateForward('forgotpassword')
  }
  signup() {
    this.navCtrl.navigateForward('signup')
  }

  login() {
    this.navCtrl.navigateRoot([
      '/jobslistlogin',
    ]);

  }
}
