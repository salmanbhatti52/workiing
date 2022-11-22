import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job12',
  templateUrl: './job12.page.html',
  styleUrls: ['./job12.page.scss'],
})
export class Job12Page implements OnInit {
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
