import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.page.html',
  styleUrls: ['./review.page.scss'],
})
export class ReviewPage implements OnInit {
  rateStar1 = false;
  rateStar2 = false;
  rateStar3 = false;
  rateStar4 = false;
  rateStar5 = false;
  feedback: string = '';

  constructor(public router: Router) {}

  ngOnInit() {}

  rateStar(val: any) {
    if (val == 1) {
      if (this.rateStar1 == false) {
        this.rateStar1 = true;
      } else {
        this.rateStar1 = false;
        this.rateStar2 = false;
        this.rateStar3 = false;
        this.rateStar4 = false;
        this.rateStar5 = false;
      }
    } else if (val == 2) {
      if (this.rateStar2 == false) {
        this.rateStar1 = true;
        this.rateStar2 = true;
      } else {
        this.rateStar2 = false;
        this.rateStar3 = false;
        this.rateStar4 = false;
        this.rateStar5 = false;
      }
    } else if (val == 3) {
      if (this.rateStar3 == false) {
        this.rateStar1 = true;
        this.rateStar2 = true;
        this.rateStar3 = true;
      } else {
        this.rateStar3 = false;
        this.rateStar4 = false;
        this.rateStar5 = false;
      }
    } else if (val == 4) {
      if (this.rateStar4 == false) {
        this.rateStar1 = true;
        this.rateStar2 = true;
        this.rateStar3 = true;
        this.rateStar4 = true;
      } else {
        this.rateStar4 = false;
        this.rateStar5 = false;
      }
    } else if (val == 5) {
      if (this.rateStar5 == false) {
        this.rateStar1 = true;
        this.rateStar2 = true;
        this.rateStar3 = true;
        this.rateStar4 = true;
        this.rateStar5 = true;
      } else {
        this.rateStar5 = false;
      }
    } else {
    }
  }

  gotoreview2() {
    this.router.navigate(['review2']);
  }
}
