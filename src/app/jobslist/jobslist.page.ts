import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobslist',
  templateUrl: './jobslist.page.html',
  styleUrls: ['./jobslist.page.scss'],
})
export class JobslistPage implements OnInit {
  slideOptsTime = {
    initialSlide: 0,
    speed: 400,
    // slidesPerView: 3.3,
    slidesPerView: 1.4,
    zoom: false,
    spaceBetween: 10,
  };
  jobslist = [{ image: 'assets/imgs/google.svg', name: 'Restaurant Team Member', nickname: 'Google', location: 'Toronto, Canada', storename: 'Testaurant/Food Server' }, { image: 'assets/imgs/google.svg', name: 'Restaurant Team Member', nickname: 'Google', location: 'Toronto, Canada', storename: 'Testaurant/Food Server' }]
  constructor(public router: Router) { }

  ngOnInit() {
  }

  goToLogin() {
    this.router.navigate(['signin'])
  }

  goToSignup() {
    this.router.navigate(['signup'])
  }

  goToProfile() {
    this.router.navigate(['profile'])
  }

  goToMap() {
    this.router.navigate(['jobsmaps'])
  }


}
