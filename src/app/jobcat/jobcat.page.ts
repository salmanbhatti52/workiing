import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobcat',
  templateUrl: './jobcat.page.html',
  styleUrls: ['./jobcat.page.scss'],
})
export class JobcatPage implements OnInit {
  selectedJobCatID = 0;
  jobCatArr = [
    { id: 1, name: 'Barista' },
    { id: 2, name: 'Chef & Cook' },
    { id: 3, name: 'Host & Server' },
    { id: 4, name: 'Bartender' },
    { id: 5, name: 'Food (others)' },
    { id: 6, name: 'Tetail' },
    { id: 7, name: 'Hotel & Leisure' },
    { id: 8, name: 'Sales & Marketing' },
    { id: 9, name: 'Customer Services' },
    { id: 10, name: 'Personal Care' },
    { id: 11, name: 'Delivery & Transport' },
    { id: 12, name: 'Office' },
    { id: 13, name: 'Cleaning & Maintenance' },
    { id: 14, name: 'General Labor' },
    { id: 15, name: 'Other' },
  ];
  constructor() {}

  ngOnInit() {}

  optClickJobCat(opt: any) {
    console.log('optClick', opt);
    this.selectedJobCatID = opt.id;
    console.log(this.selectedJobCatID);
  }
}
