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

  constructor(public router: Router) {}

  ngOnInit() {}

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

  next() {
    this.router.navigate(['jobcat']);
  }
}
