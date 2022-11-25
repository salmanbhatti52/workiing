import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.page.html',
  styleUrls: ['./updatepassword.page.scss'],
})
export class UpdatepasswordPage implements OnInit {
  showPass = false;
  newshowPass = false;
  confirmshowPass = false;
  constructor() { }

  ngOnInit() {
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


}
