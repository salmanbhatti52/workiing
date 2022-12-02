import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { CompleteprofilepopupPage } from '../completeprofilepopup/completeprofilepopup.page';
@Component({
  selector: 'app-basicprofile6',
  templateUrl: './basicprofile6.page.html',
  styleUrls: ['./basicprofile6.page.scss'],
})
export class Basicprofile6Page implements OnInit {

  constructor(public modal: ModalController,
    public location: Location,
    public navCtrl: NavController) { }

  ngOnInit() {
  }

  back() {
    this.location.back()
  }

  backto() {
    this.navCtrl.navigateForward('addeducation')
  }
  async nextto() {
    const modal = await this.modal.create({
      component: CompleteprofilepopupPage,
      cssClass: 'profilePopupclass',
    });

    return await modal.present();
  }

}
