import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job5',
  templateUrl: './job5.page.html',
  styleUrls: ['./job5.page.scss'],
})
export class Job5Page implements OnInit {
  constructor(public router: Router) {}

  ngOnInit() {}

  next() {
    this.router.navigate(['job3']);
  }
}
