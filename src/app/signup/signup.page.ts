import { LoadingService } from './../services/loading.service';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { NavController } from '@ionic/angular';
import { RestService } from '../services/rest.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  allItems = [];
  items: any;
  usertype: any;
  flagimg = '/assets/imgs/flag.svg';
  countrycode = '+1';
  showPass = false;
  upicon = false;
  flaglist = false;
  showflags = true;

  firstname: any;
  lastname: any;
  email: any;
  phonenumber: any;
  password: any;
  constructor(public route: ActivatedRoute,
    public location: Location,
    public http: HttpClient,
    public navCtrl: NavController,
    public rest: RestService,
    public extra: LoadingService) { }

  ngOnInit() {
    this.usertype = this.route.snapshot.params['jobtype'];
    console.log(this.usertype);
    if (this.usertype == 'Job Seeker') {
      this.usertype = 'Seeker'
    } else {
      this.usertype == this.usertype
    }

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
    this.extra.loadershow()
    let datasend = {
      "one_signal_id": "123456",
      "user_type": this.usertype,
      "first_name": this.firstname,
      "last_name": this.lastname,
      "phone": this.countrycode + this.phonenumber,
      "email": this.email,
      "password": this.password,
      "account_type": "SignupWithApp"
    }


    this.rest.sendRequest('signup', datasend).subscribe((res: any) => {
      console.log('response--', res);
      if (res.status == "success") {
        this.extra.email = res.data[0].email
        this.extra.name = res.data[0].first_name + res.data[0].last_name
        localStorage.setItem("userdata", JSON.stringify(res.data[0]));
        localStorage.setItem('users_customers_id', res.data[0].users_customers_id)
        this.extra.hideLoader();
        this.navCtrl.navigateRoot('jobslistlogin')
      } else {
        this.extra.presentToast(res.message)
        this.extra.hideLoader();
      }

    }, err => {
      console.log(err);

      this.extra.hideLoader();
    })

  }
  signin() {
    this.navCtrl.navigateRoot('signin')
  }
}
