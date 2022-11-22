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

  constructor(public router: Router) {}

  ngOnInit() {}

  optClick(opt: any) {
    console.log('optClick', opt);
    this.selectedoptId = opt.id;
    console.log(this.selectedoptId);
  }

  next() {
    this.router.navigate(['job9']);
  }
}
