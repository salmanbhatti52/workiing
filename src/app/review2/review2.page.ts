import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review2',
  templateUrl: './review2.page.html',
  styleUrls: ['./review2.page.scss'],
})
export class Review2Page implements OnInit {

  constructor(public location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back()
  }

}
