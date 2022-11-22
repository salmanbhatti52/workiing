import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-onboradingscreen',
  templateUrl: './onboradingscreen.page.html',
  styleUrls: ['./onboradingscreen.page.scss'],
})
export class OnboradingscreenPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  signin() {
    this.navCtrl.navigateForward('getstarted');
  }

}
