import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mypostedjob2',
  templateUrl: './mypostedjob2.page.html',
  styleUrls: ['./mypostedjob2.page.scss'],
})
export class Mypostedjob2Page implements OnInit {
  constructor(public router: Router,
    public location: Location) { }

  ngOnInit() { }

  editjob() {
    this.router.navigate(['job1']);
  }
  back() {
    this.location.back()
  }
  goToJob12() {
    this.router.navigate(['myjobpedning']);
  }

  goToJob13() {
    this.router.navigate(['myjobshortlist']);
  }

  goToJob14() {
    this.router.navigate(['myjobinterview']);
  }
}
