import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.page.html',
  styleUrls: ['./resetpassword.page.scss'],
})
export class ResetpasswordPage implements OnInit {
  showPass = false;
  cshowPass = false;
  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  togglePass() {
    this.showPass = !this.showPass;
  }
  ctogglePass() {
    this.cshowPass = !this.cshowPass;
  }

  reset() {
    this.navCtrl.navigateForward('signin');
  }

}
