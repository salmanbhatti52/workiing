import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-addexperience',
  templateUrl: './addexperience.page.html',
  styleUrls: ['./addexperience.page.scss'],
})
export class AddexperiencePage implements OnInit {
  jobType = 'UI/UX Design';
  showMaker: any = false;
  jobcategory = [{
    job: "UI/UX Design",
    active: false
  }];
  optionArr = [
    { id: 1, name: 'Yes' },
    { id: 2, name: 'No' },
  ];
  selectedoptIdReply = 0;
  constructor(public location: Location,
    public navCtrl: NavController) { }

  ngOnInit() {
  }

  openjobList() {
    if (this.showMaker == true) {
      this.showMaker = false;
    } else {
      this.showMaker = true;

    }
  }


  selectcategory(list: any, index: any) {
    this.jobType = list.job;
    // this.vehicleModelVal = '';
    this.showMaker = false;

  }

  optClickReply(opt: any) {
    console.log('optClickReply', opt);
    this.selectedoptIdReply = opt.id;
  }

  next() {
    this.navCtrl.navigateForward('basicprofile4')
  }
}
