import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ForgotpopupPage } from '../forgotpopup/forgotpopup.page';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {

  constructor(public modal: ModalController,
    public navCtrl: NavController) { }

  ngOnInit() {
  }

  async popup() {
    const modal = await this.modal.create({
      component: ForgotpopupPage,
      cssClass: 'forgotPopupclass',
    });

    return await modal.present();
  }



}
