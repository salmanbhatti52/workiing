import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  goToEditProfile() {
    this.router.navigate(['editprofile'])
  }

  goToJobList() {
    this.router.navigate(['/jobslistlogin'])
  }
  goToProfile() {
    this.router.navigate(['/jobslistlogin'])

  }


  goToMsg() {
    this.router.navigate(['/inbox'])

  }


  goToSaveJobs() {
    this.router.navigate(['/jobslistlogin'])

  }


}
