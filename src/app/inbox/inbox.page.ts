import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
})
export class InboxPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  goToChat() {
    this.router.navigate(['/chats'])

  }


  goToJobList() {
    this.router.navigate(['jobslistlogin'])
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


}
