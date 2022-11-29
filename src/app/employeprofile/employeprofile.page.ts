import { Location } from '@angular/common';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-employeprofile',
  templateUrl: './employeprofile.page.html',
  styleUrls: ['./employeprofile.page.scss'],
})
export class EmployeprofilePage implements OnInit {
  @ViewChild('mySegment', { read: ElementRef }) private mySegment!: ElementRef;
  requestsType: any;
  constructor(public location: Location) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    if (this.requestsType) {
      if (this.requestsType === 'AllPosts') {
        this.mySegment.nativeElement.children[0].click();
        console.log('click event', this.mySegment.nativeElement.children[0].click())
      }
      if (this.requestsType === 'RecentJobsPosted') {
        this.mySegment.nativeElement.children[1].click();
      }
    } else {
      this.requestsType = 'AllPosts';
      this.mySegment.nativeElement.children[0].click();
    }
  }

  segmentChanged(ev: any) {
    if (ev.detail.value === 'AllPosts') {
      this.requestsType = 'AllPosts';

    }
    if (ev.detail.value === 'RecentJobsPosted') {
      this.requestsType = 'RecentJobsPosted';

    }
    localStorage.setItem('requestType', this.requestsType);
  }

  goBack() {
    this.location.back()
  }

}
