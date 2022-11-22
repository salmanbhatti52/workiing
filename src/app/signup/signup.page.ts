import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  allItems = [];
  items: any;
  gettypename: any;
  flagimg = '/assets/imgs/flag.svg';
  countrycode = '+1';
  showPass = false;
  upicon = false;
  flaglist = false;
  showflags = true;
  constructor(public route: ActivatedRoute,
    public location: Location,
    public http: HttpClient,
    public navCtrl: NavController) { }

  ngOnInit() {
    this.gettypename = this.route.snapshot.params['jobtype'];
    console.log(this.gettypename);

    this.setItems();
  }

  goback() {
    this.location.back()
  }
  togglePass() {
    this.showPass = !this.showPass;
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
    this.http.get('assets/countries.json').subscribe(
      (res: any) => {
        this.allItems = res.countries;
        this.items = this.allItems;
        console.log('items', this.items);

      }
    );
  }

  viewDetails(item: any) {
    console.log('item===', item)
    this.flaglist = false
    this.flagimg = item.flag
    this.upicon = false;
    this.countrycode = '+' + item.callingCodes[0];
    console.log('code===', this.countrycode)
  }

  gotonext() {
    this.navCtrl.navigateRoot('jobslist')
  }
}
