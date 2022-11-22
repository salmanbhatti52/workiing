import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-addeducation',
  templateUrl: './addeducation.page.html',
  styleUrls: ['./addeducation.page.scss'],
})
export class AddeducationPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  nextto() {
    this.navCtrl.navigateForward('basicprofile6')
  }

}
