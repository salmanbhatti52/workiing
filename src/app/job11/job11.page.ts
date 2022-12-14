import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job11',
  templateUrl: './job11.page.html',
  styleUrls: ['./job11.page.scss'],
})
export class Job11Page implements OnInit {
  constructor(public router: Router,
    public location: Location) { }

  ngOnInit() { }

  goback() {
    this.router.navigate(['mypostedjob1']);
    // this.location.back()
  }

  edit() {
    this.router.navigate(['job1']);
  }
  goToJob12() {
    this.router.navigate(['job12']);
  }

  goToJob13() {
    this.router.navigate(['job13']);
  }

  goToJob14() {
    this.router.navigate(['job14']);
  }
}
