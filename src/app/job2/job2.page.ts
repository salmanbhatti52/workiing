import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Job4Page } from '../job4/job4.page';
@Component({
  selector: 'app-job2',
  templateUrl: './job2.page.html',
  styleUrls: ['./job2.page.scss'],
})
export class Job2Page implements OnInit {
  otp: any;
  constructor(public modal: ModalController, public router: Router) {}

  ngOnInit() {}

  onOtpChange(event: any) {
    console.log(event, 'eventevent');
    this.otp = event;
  }

  async popup() {
    const modal = await this.modal.create({
      component: Job4Page,
      cssClass: 'forgotPopupclass',
    });

    return await modal.present();
  }

  next() {
    this.router.navigate(['job5']);
  }
}
