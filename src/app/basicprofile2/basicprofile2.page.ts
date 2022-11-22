import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicprofile2',
  templateUrl: './basicprofile2.page.html',
  styleUrls: ['./basicprofile2.page.scss'],
})
export class Basicprofile2Page implements OnInit {
  optionArr = [
    { id: 1, name: '18 or Over' },
    { id: 2, name: 'Under 18' },
  ];
  jobsArr = [{ id: 1, name: 'Full Time' },
  { id: 2, name: 'Part Time' },
  { id: 3, name: 'Both' }]
  selectedoptIdReply = 0;
  selectedoptjob = 0;
  constructor() { }

  ngOnInit() {
  }

  optClickReply(opt: any) {
    console.log('optClickReply', opt);
    this.selectedoptIdReply = opt.id;
  }

  optjobReply(opt: any) {
    this.selectedoptjob = opt.id;
  }

}
