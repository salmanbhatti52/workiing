import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-getstarted',
  templateUrl: './getstarted.page.html',
  styleUrls: ['./getstarted.page.scss'],
})
export class GetstartedPage implements OnInit {
  jobtype = [{ id: 0, img: '/assets/imgs/jobtype1.svg', name: 'Job Seeker', status: false }, { id: 1, img: '/assets/imgs/jobtype2.svg', name: 'Employer', status: false }]
  jobtypename: any;
  btnshow = false;
  constructor(public location: Location,
    public navCtrl: NavController) { }

  ngOnInit() {
  }

  goback() {
    this.location.back();
  }

  selectsumassured(list: any, index: any) {
    console.log(list);
    this.btnshow = true
    this.jobtypename = list.name
    this.jobtype.map((val, i) => {
      // console.log(i);

      if (index == i) {
        this.jobtype[i].status = true;

      }
      if (index != i) {
        this.jobtype[i].status = false;

      }
    });
  }

  goto() {
    this.navCtrl.navigateForward(['signup', {
      jobtype: this.jobtypename
    }])
  }

  signin() {
    this.navCtrl.navigateForward('signin')
  }
}
