import { Location } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile-preview',
  templateUrl: './profile-preview.page.html',
  styleUrls: ['./profile-preview.page.scss'],
})
export class ProfilePreviewPage implements OnInit {
  @ViewChild('mySegment', { read: ElementRef }) private mySegment!: ElementRef;
  requestsType: any;
  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  goback() {
    this.navCtrl.navigateForward('jobslistlogin')
  }

  goToChat() {
    this.navCtrl.navigateForward('inbox')
  }
  ionViewWillEnter() {
    if (this.requestsType) {
      if (this.requestsType === 'experience') {
        this.mySegment.nativeElement.children[0].click();
        console.log('click event', this.mySegment.nativeElement.children[0].click())
      }
      if (this.requestsType === 'education') {
        this.mySegment.nativeElement.children[1].click();
      }
    } else {
      this.requestsType = 'experience';
      this.mySegment.nativeElement.children[0].click();
    }
  }

  segmentChanged(ev: any) {
    if (ev.detail.value === 'experience') {
      this.requestsType = 'experience';

    }
    if (ev.detail.value === 'education') {
      this.requestsType = 'education';

    }
    localStorage.setItem('requestType', this.requestsType);
  }

}
