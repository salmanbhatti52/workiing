import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { LoadingService } from './../services/loading.service';
@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.page.html',
  styleUrls: ['./updatepassword.page.scss'],
})
export class UpdatepasswordPage implements OnInit {
  showPass = false;
  newshowPass = false;
  confirmshowPass = false;

  newpassword: any;
  oldpassword: any;
  confirmpassword: any;
  email: any;
  usss: any;
  userdetail: any;
  constructor(public location: Location,
    public rest: RestService,
    public extra: LoadingService) { }

  ngOnInit() {
    this.usss = localStorage.getItem('userdata');
    this.userdetail = JSON.parse(this.usss);
    console.log(this.userdetail);

    this.email = this.userdetail.email
    console.log(this.email);
  }

  togglePass() {
    this.showPass = !this.showPass;
  }
  newtogglePass() {
    this.newshowPass = !this.newshowPass;
  }
  confirmtogglePass() {
    this.confirmshowPass = !this.confirmshowPass;
  }

  goBack() {
    this.location.back()
  }

  updatepassword() {
    let datasend = {
      "email": this.email,
      "old_password": this.oldpassword,
      "password": this.newpassword,
      "confirm_password": this.confirmpassword
    }
    this.rest.sendRequest('change_password', datasend).subscribe((res: any) => {
      console.log('response--', res);
      this.extra.hideLoader();
      if (res.status == 'success') {

      } else {

        this.extra.presentToast(res.message);
      }

    }, err => {
      console.log(err);

      this.extra.hideLoader();
    })
  }
}
