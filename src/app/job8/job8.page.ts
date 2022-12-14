import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job8',
  templateUrl: './job8.page.html',
  styleUrls: ['./job8.page.scss'],
})
export class Job8Page implements OnInit {
  selectedoptId = 0;
  optionArrAge = [
    { id: 1, name: 'Yes' },
    { id: 2, name: 'No' },
  ];

  constructor(public router: Router,
    public location: Location) { }

  ngOnInit() { }

  back() {
    this.location.back()
  }
  optClick(opt: any) {
    console.log('optClick', opt);
    this.selectedoptId = opt.id;
    console.log(this.selectedoptId);
  }

  next() {
    this.router.navigate(['job9']);
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
