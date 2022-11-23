import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mypostedjob2',
  templateUrl: './mypostedjob2.page.html',
  styleUrls: ['./mypostedjob2.page.scss'],
})
export class Mypostedjob2Page implements OnInit {
  constructor(public router: Router) {}

  ngOnInit() {}

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