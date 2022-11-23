import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myjobshortlist',
  templateUrl: './myjobshortlist.page.html',
  styleUrls: ['./myjobshortlist.page.scss'],
})
export class MyjobshortlistPage implements OnInit {
  arraytest = [
    {
      id: 1,
      image: 'assets/imgs/joblogo.svg',
      name: 'Ali Syed',
      arealocation: 'Multan',
      experence: '5 years',
      workplace: 'Akodes IT',
    },
    {
      id: 1,
      image: 'assets/imgs/joblogo.svg',
      name: 'Ali Syed',
      arealocation: 'Multan',
      experence: '5 years',
      workplace: 'Akodes IT',
    },
    {
      id: 1,
      image: 'assets/imgs/joblogo.svg',
      name: 'Ali Syed',
      arealocation: 'Multan',
      experence: '5 years',
      workplace: 'Akodes IT',
    },
    {
      id: 1,
      image: 'assets/imgs/joblogo.svg',
      name: 'Ali Syed',
      arealocation: 'Multan',
      experence: '5 years',
      workplace: 'Akodes IT',
    },
    {
      id: 1,
      image: 'assets/imgs/joblogo.svg',
      name: 'Ali Syed',
      arealocation: 'Multan',
      experence: '5 years',
      workplace: 'Akodes IT',
    },
    {
      id: 1,
      image: 'assets/imgs/joblogo.svg',
      name: 'Ali Syed',
      arealocation: 'Multan',
      experence: '5 years',
      workplace: 'Akodes IT',
    },
    {
      id: 1,
      image: 'assets/imgs/joblogo.svg',
      name: 'Ali Syed',
      arealocation: 'Multan',
      experence: '5 years',
      workplace: 'Akodes IT',
    },
  ];
  constructor(public location: Location) {}

  ngOnInit() {}

  goBack() {
    this.location.back();
  }
}
