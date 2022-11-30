import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-review2',
  templateUrl: './review2.page.html',
  styleUrls: ['./review2.page.scss'],
})
export class Review2Page implements OnInit {
  charcount = 0;

  constructor(public location: Location) { }

  ngOnInit() {

  }

  goBack() {
    this.location.back()
  }

  crazyEvent(ev: any) {
    // console.log(ev.detail.value.length);
    this.charcount = ev.detail.value.length
  }

}
