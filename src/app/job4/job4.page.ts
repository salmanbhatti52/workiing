import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-job4',
  templateUrl: './job4.page.html',
  styleUrls: ['./job4.page.scss'],
})
export class Job4Page implements OnInit {

  constructor(public modal: ModalController) { }

  ngOnInit() {
  }
  dismiss() {
    this.modal.dismiss().then(data => {
      // this.navCtrl.navigateForward('otp');
    })
  }

}
