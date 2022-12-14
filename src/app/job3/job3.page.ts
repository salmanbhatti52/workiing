import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job3',
  templateUrl: './job3.page.html',
  styleUrls: ['./job3.page.scss'],
})
export class Job3Page implements OnInit {
  optionArr = [
    { id: 1, name: 'Yes' },
    { id: 2, name: 'No' },
  ];

  optionArrAge = [
    { id: 1, name: 'Yes', img: 'assets/imgs/checkgray.svg' },
    { id: 2, name: 'No', img: 'assets/imgs/checkwhite.svg' },
  ];

  ageArr = [
    { id: 1, name: '18 or Over', img: 'assets/imgs/checkgray.svg' },
    { id: 2, name: 'Under 18', img: 'assets/imgs/checkwhite.svg' },
  ];

  selectedoptId = 0;
  selectedoptIdAge = 0;
  selectedoptIdReply = 0;

  open = false;
  jobcategory = [{
    job: "UI/UX Design",
    active: false
  }, {
    job: "UI/UX Design",
    active: false
  }];

  choosetype = [
    { id: 1, name: 'Per Hour' },
    { id: 2, name: 'Monthly' },
  ];
  Type: any;
  constructor(public router: Router,
    public location: Location) { }

  ngOnInit() { }

  back() {
    this.location.back()
  }
  openlist() {
    if (this.open == true) {
      this.open = false;
    } else {
      this.open = true;

    }

  }
  selecttype(list: any, index: any) {
    this.Type = list.name;
    // this.vehicleModelVal = '';
    this.open = false;

  }
  optClick(opt: any) {
    console.log('optClick', opt);
    this.selectedoptId = opt.id;
    console.log(this.selectedoptId);
  }

  optClickAge(opt: any) {
    console.log('optClickAge---', opt);
    this.selectedoptIdAge = opt.id;
    console.log(this.selectedoptIdAge);
  }

  optClickReply(opt: any) {
    console.log('optClickReply', opt);
    this.selectedoptIdReply = opt.id;
  }

  selectcategory() {
    this.router.navigate(['jobcat']);
  }

  next() {
    this.router.navigate(['job8']);
  }


  goToJobList() {
    this.router.navigate(['jobslistlogin'])
  }

  goToInbox() {
    this.router.navigate(['inbox'])
  }

  goToPostJob() {
    this.router.navigate(['job1'])
  }
  goToSaveJobs() {
    this.router.navigate(['mypostedjob1'])
  }

  goToProfile() {
    this.router.navigate(['profile'])
  }
}
