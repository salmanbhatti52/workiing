import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CompleteprofilepopupPage } from '../completeprofilepopup/completeprofilepopup.page';
@Component({
  selector: 'app-basicprofile6',
  templateUrl: './basicprofile6.page.html',
  styleUrls: ['./basicprofile6.page.scss'],
})
export class Basicprofile6Page implements OnInit {

  constructor(public modal: ModalController,
    public location: Location) { }

  ngOnInit() {
  }

  back() {
    this.location.back()
  }
  async nextto() {
    const modal = await this.modal.create({
      component: CompleteprofilepopupPage,
      cssClass: 'profilePopupclass',
    });

    return await modal.present();
  }

}
