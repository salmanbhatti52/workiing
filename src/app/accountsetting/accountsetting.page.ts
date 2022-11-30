import { DeleteaccountPage } from './../deleteaccount/deleteaccount.page';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
@Component({
  selector: 'app-accountsetting',
  templateUrl: './accountsetting.page.html',
  styleUrls: ['./accountsetting.page.scss'],
})
export class AccountsettingPage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  name: any;

  Checkboxes = [{ question: 'I have recently found a job on Workiing', isItemChecked: false }, { question: 'I have recently found a job on another app or website.', isItemChecked: false },
  { question: 'I have receive too many notifications', isItemChecked: false }, { question: 'There are not enough jobs', isItemChecked: false }, { question: 'This app is difficult to use', isItemChecked: false }, { question: 'Other', isItemChecked: false }];
  selectquestions = [];
  constructor(public router: Router,
  ) { }

  ngOnInit() { }

  goToEditProfile() {
    this.router.navigate(['editprofile']);
  }

  goToChangePass() {
    this.router.navigate(['updatepassword']);
  }

  goToNoti() {
    this.router.navigate(['notificationsettings']);
  }


  async goToDeleteAcc() {
    // const modal = await this.modal.create({
    //   component: DeleteaccountPage,
    //   cssClass: 'deleteclass',
    // });

    // return await modal.present();
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    // if (ev.detail.role === 'confirm') {
    //   this.message = `Hello, ${ev.detail.data}!`;
    // }
  }

  verifyEvent(ev: any) {
    console.log(ev);
    // if (ev.isItemChecked == true) {
    //   this.selectquestions.push(ev.question)
    //   console.log('selectquestions aray', this.selectquestions)
    // }
    // if (ev.isItemChecked == false) {

    //   const index = this.selectquestions.indexOf(ev.question);
    //   if (index > -1) {
    //     this.selectquestions.splice(index, 1); // 2nd parameter means remove one item only
    //     console.log('job aray', this.selectquestions)
    //   }

    // }
  }

}
