import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-basicprofile5',
  templateUrl: './basicprofile5.page.html',
  styleUrls: ['./basicprofile5.page.scss'],
})
export class Basicprofile5Page implements OnInit {

  constructor(public location: Location,
    public navCtrl: NavController) { }

  ngOnInit() {
  }

  back() {
    this.location.back()
  }
  nextto() {
    this.navCtrl.navigateForward('addeducation')
  }
}
