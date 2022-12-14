import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-job9',
  templateUrl: './job9.page.html',
  styleUrls: ['./job9.page.scss'],
})
export class Job9Page implements OnInit {

  constructor(public router: Router,
    public location: Location) { }

  ngOnInit() {
  }


  back() {
    this.location.back()
  }

  next() {
    this.router.navigate(['job11'])
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
