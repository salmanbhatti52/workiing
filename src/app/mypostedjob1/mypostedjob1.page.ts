import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mypostedjob1',
  templateUrl: './mypostedjob1.page.html',
  styleUrls: ['./mypostedjob1.page.scss'],
})
export class Mypostedjob1Page implements OnInit {
  constructor(public router: Router) {}

  ngOnInit() {}

  goToMyPostedJob2() {
    this.router.navigate(['mypostedjob2']);
  }
}
