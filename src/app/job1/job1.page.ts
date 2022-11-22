import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-job1',
  templateUrl: './job1.page.html',
  styleUrls: ['./job1.page.scss'],
})
export class Job1Page implements OnInit {
  allItems = [];
  items: any;
  gettypename: any;
  flagimg = '/assets/imgs/flag.svg';
  countrycode = '+1';
  showPass = false;
  upicon = false;
  flaglist = false;
  showflags = true;
  constructor(public http: HttpClient, public router: Router) {}

  ngOnInit() {
    this.setItems();
  }

  openfflaglist() {
    if (this.upicon == false) {
      this.upicon = true;
      this.flaglist = true;
    } else {
      this.upicon = false;
      this.flaglist = false;
    }

    // this.setItems();
  }
  setItems() {
    this.http.get('assets/countries.json').subscribe((res: any) => {
      this.allItems = res.countries;
      this.items = this.allItems;
      console.log('items', this.items);
    });
  }

  viewDetails(item: any) {
    console.log('item===', item);
    this.flaglist = false;
    this.flagimg = item.flag;
    this.upicon = false;
    this.countrycode = '+' + item.callingCodes[0];
    console.log('code===', this.countrycode);
  }

  next() {
    this.router.navigate(['job2']);
  }
}
