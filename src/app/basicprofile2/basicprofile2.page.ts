import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-basicprofile2',
  templateUrl: './basicprofile2.page.html',
  styleUrls: ['./basicprofile2.page.scss'],
})
export class Basicprofile2Page implements OnInit {
  optionArr = [
    { id: 1, name: '18 or Over' },
    { id: 2, name: 'Under 18' },
  ];
  jobsArr = [{ id: 1, name: 'Full Time' },
  { id: 2, name: 'Part Time' },
  { id: 3, name: 'Both' }]
  activesearches = [
    { id: 1, name: 'Yes' },
    { id: 2, name: 'No' },
  ];
  selectedoptIdReply = 0;
  selectedoptjob = 0;
  empsearch = 0;
  constructor(public location: Location,
    public navCtrl: NavController) { }

  ngOnInit() {
  }

  back() {
    this.location.back()
  }

  optClickReply(opt: any) {
    console.log('optClickReply', opt);
    this.selectedoptIdReply = opt.id;
  }

  optjobReply(opt: any) {
    this.selectedoptjob = opt.id;
  }
  searchesjobReply(opt: any) {
    this.empsearch = opt.id;
  }

  next() {
    this.navCtrl.navigateForward('basicprofile3')
  }
}
