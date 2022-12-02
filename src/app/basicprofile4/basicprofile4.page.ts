import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-basicprofile4',
  templateUrl: './basicprofile4.page.html',
  styleUrls: ['./basicprofile4.page.scss'],
})
export class Basicprofile4Page implements OnInit {
  p_bar_value = 0.5;
  constructor(public location: Location,
    public navCtrl: NavController) { }

  ngOnInit() {
  }

  back() {
    this.location.back()
  }

  backto() {
    this.navCtrl.navigateForward('addexperience');
  }
  nextto() {
    this.navCtrl.navigateForward('basicprofile5');
  }

}
