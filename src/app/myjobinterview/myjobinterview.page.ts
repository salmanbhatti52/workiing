import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myjobinterview',
  templateUrl: './myjobinterview.page.html',
  styleUrls: ['./myjobinterview.page.scss'],
})
export class MyjobinterviewPage implements OnInit {
  arraytest = [
    {
      id: 1,
      image: 'assets/imgs/joblogo.svg',
      name: 'Ali Syed',
      arealocation: 'Multan',
      experence: '5 years',
      workplace: 'Akodes IT',
      interviewdate: '21/11/2022',
    },
    {
      id: 1,
      image: 'assets/imgs/joblogo.svg',
      name: 'Ali Syed',
      arealocation: 'Multan',
      experence: '5 years',
      workplace: 'Akodes IT',
      interviewdate: '21/11/2022',
    },
    {
      id: 1,
      image: 'assets/imgs/joblogo.svg',
      name: 'Ali Syed',
      arealocation: 'Multan',
      experence: '5 years',
      workplace: 'Akodes IT',
      interviewdate: '21/11/2022',
    },
    {
      id: 1,
      image: 'assets/imgs/joblogo.svg',
      name: 'Ali Syed',
      arealocation: 'Multan',
      experence: '5 years',
      workplace: 'Akodes IT',
      interviewdate: '21/11/2022',
    },
    {
      id: 1,
      image: 'assets/imgs/joblogo.svg',
      name: 'Ali Syed',
      arealocation: 'Multan',
      experence: '5 years',
      workplace: 'Akodes IT',
      interviewdate: '21/11/2022',
    },
    {
      id: 1,
      image: 'assets/imgs/joblogo.svg',
      name: 'Ali Syed',
      arealocation: 'Multan',
      experence: '5 years',
      workplace: 'Akodes IT',
      interviewdate: '21/11/2022',
    },
    {
      id: 1,
      image: 'assets/imgs/joblogo.svg',
      name: 'Ali Syed',
      arealocation: 'Multan',
      experence: '5 years',
      workplace: 'Akodes IT',
      interviewdate: '21/11/2022',
    },
    {
      id: 1,
      image: 'assets/imgs/joblogo.svg',
      name: 'Ali Syed',
      arealocation: 'Multan',
      experence: '5 years',
      workplace: 'Akodes IT',
      interviewdate: '21/11/2022',
    },
  ];
  constructor(public location: Location) {}

  ngOnInit() {}

  goBack() {
    this.location.back();
  }
}
