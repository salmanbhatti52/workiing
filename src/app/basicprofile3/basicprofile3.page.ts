import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-basicprofile3',
  templateUrl: './basicprofile3.page.html',
  styleUrls: ['./basicprofile3.page.scss'],
})
export class Basicprofile3Page implements OnInit {

  constructor(public location: Location,
    public navCtrl: NavController) { }

  ngOnInit() {
  }

  back() {
    this.location.back()
  }

  add() {
    this.navCtrl.navigateForward('addexperience');
  }

  save() {
    this.navCtrl.navigateForward('basicprofile4');
  }
}
