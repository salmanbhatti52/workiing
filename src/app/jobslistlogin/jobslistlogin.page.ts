import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobslistlogin',
  templateUrl: './jobslistlogin.page.html',
  styleUrls: ['./jobslistlogin.page.scss'],
})
export class JobslistloginPage implements OnInit {
  slideOptsTime = {
    initialSlide: 0,
    speed: 400,
    // slidesPerView: 3.3,
    slidesPerView: 1.4,
    zoom: false,
    spaceBetween: 10,
  };
  jobslist = [{ image: 'assets/imgs/google.svg', name: 'Restaurant Team Member', nickname: 'Google', location: 'Toronto, Canada', storename: 'Testaurant/Food Server' }, { image: 'assets/imgs/google.svg', name: 'Restaurant Team Member', nickname: 'Google', location: 'Toronto, Canada', storename: 'Testaurant/Food Server' }]
  t1 = true
  t2 = false
  t3 = false
  t4 = false
  t5 = false

  dropshadow = true;
  divshow: boolean = true;
  userdetail: any;
  userstatus: any;
  usss: any;
  constructor(public router: Router) {
    this.usss = localStorage.getItem('userdata');
    this.userdetail = JSON.parse(this.usss);
    console.log(this.userdetail);

    this.userstatus = this.userdetail.status
    console.log(this.userstatus);

    if (localStorage.getItem('dropshadow') == 'false') {
      this.dropshadow = false;
      this.divshow = false
    }
  }

  startnow() {
    this.dropshadow = false;
    this.divshow = false
    this.router.navigate(['/basicprofile']);
    localStorage.setItem('dropshadow', 'false');
  }
  close() {
    this.dropshadow = false;
    this.divshow = false;
    localStorage.setItem('dropshadow', 'false');

  }

  mapopen() {
    this.router.navigate(['/jobsmaplogin']);
  }

  filterjob() {
    this.router.navigate(['/jobfilter']);
  }
  gotoprofile() {
    this.router.navigate(['/basicprofile']);
  }
  tab1Click() {

    this.t1 = true
    this.t2 = false
    this.t3 = false
    this.t4 = false
    this.t5 = false
  }
  tab2Click() {
    this.t1 = false
    this.t2 = true
    this.t3 = false
    this.t4 = false
    this.t5 = false
  }
  tab3Click() {
    this.t1 = false
    this.t2 = false
    this.t3 = true
    this.t4 = false
    this.t5 = false
  }

  ngOnInit() {
  }



  goToInbox() {
    this.router.navigate(['inbox'])
  }

  goToPostJob() {
    this.router.navigate(['job1'])
  }
  goToSaveJobs() {
    this.router.navigate(['mypostedjob1'])
  }

  goToProfile() {
    this.router.navigate(['profile'])
  }

  seedetail() {
    this.router.navigate(['jobdetail'])
  }
}
