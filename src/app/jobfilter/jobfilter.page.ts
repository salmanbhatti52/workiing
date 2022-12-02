import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobfilter',
  templateUrl: './jobfilter.page.html',
  styleUrls: ['./jobfilter.page.scss'],
})
export class JobfilterPage implements OnInit {
  jobType = 'UI/UX Design';
  distancecovered = 'miles';
  showMaker: any = false;
  distanceshow = false;

  jobcategory = [{
    job: "UI/UX Design",
    active: false
  }, {
    job: "UI/UX Design",
    active: false
  }];
  optionArr = [
    { id: 1, name: 'Yes' },
    { id: 2, name: 'No' },
  ];
  selectedoptIdReply = 0;
  distance = [{ miles: '10 miles', active: false }]
  choosearray = [{ name: 'UI/UX Design' }, { name: '10 miles' }, { name: 'Full Time' }, { name: 'Clear all' }]
  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  openjobList() {
    if (this.showMaker == true) {
      this.showMaker = false;
    } else {
      this.showMaker = true;

    }
  }

  applynow() {
    this.navCtrl.navigateForward('jobslistlogin');
  }
  selectcategory(list: any, index: any) {
    this.jobType = list.job;
    // this.vehicleModelVal = '';
    this.showMaker = false;

  }

  distanceList() {
    if (this.distanceshow == true) {
      this.distanceshow = false;
    } else {
      this.distanceshow = true;

    }
  }


  selectdistance(list: any, index: any) {
    this.distancecovered = list.miles;
    // this.vehicleModelVal = '';
    this.distanceshow = false;

  }

  optClickReply(opt: any) {
    console.log('optClickReply', opt);
    this.selectedoptIdReply = opt.id;
  }
}
