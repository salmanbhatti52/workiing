import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit() {}

  optClick(opt: any) {
    console.log('optClick', opt);
    this.selectedoptId = opt.id;
    console.log(this.selectedoptId);
  }
}
