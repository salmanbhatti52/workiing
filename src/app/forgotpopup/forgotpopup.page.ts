import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-forgotpopup',
  templateUrl: './forgotpopup.page.html',
  styleUrls: ['./forgotpopup.page.scss'],
})
export class ForgotpopupPage implements OnInit {

  constructor(public modal: ModalController,
    public navCtrl: NavController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modal.dismiss().then(data => {
      this.navCtrl.navigateForward('otp');
    })
  }

}
