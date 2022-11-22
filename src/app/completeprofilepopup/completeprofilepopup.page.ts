import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-completeprofilepopup',
  templateUrl: './completeprofilepopup.page.html',
  styleUrls: ['./completeprofilepopup.page.scss'],
})
export class CompleteprofilepopupPage implements OnInit {

  constructor(public modal: ModalController,
    public navCtrl: NavController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modal.dismiss().then(data => {
      this.navCtrl.navigateForward('profile-preview');
    })
  }

}
