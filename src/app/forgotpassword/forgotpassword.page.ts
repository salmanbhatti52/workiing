import { LoadingService } from './../services/loading.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ForgotpopupPage } from '../forgotpopup/forgotpopup.page';
import { RestService } from '../services/rest.service';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {
  email: any;
  constructor(public modal: ModalController,
    public navCtrl: NavController,
    public rest: RestService,
    public extra: LoadingService) { }

  ngOnInit() {
  }

  async popup() {
    let datasend = {
      "email": this.email,
    }
    this.rest.sendRequest('forgot_password', datasend).subscribe((res: any) => {
      console.log('response--', res);
      this.extra.hideLoader();
      if (res.status == 'success') {
        localStorage.setItem('otp', res.data.otp);
        this.openmodal()
      } else {

        this.extra.presentToast(res.message)
      }

    }, err => {
      console.log(err);

      this.extra.hideLoader();
    })

  }

  async openmodal() {
    const modal = await this.modal.create({
      component: ForgotpopupPage,
      cssClass: 'forgotPopupclass',
    });

    return await modal.present();
  }


}
