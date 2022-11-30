import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deleteaccount',
  templateUrl: './deleteaccount.page.html',
  styleUrls: ['./deleteaccount.page.scss'],
})
export class DeleteaccountPage implements OnInit {
  Checkboxes = [{ question: 'I have recently found a job on Workiing', isItemChecked: false }, { question: 'I have recently found a job on another app or website.', isItemChecked: false },
  { question: 'I have receive too many notifications', isItemChecked: false }, { question: 'There are not enough jobs', isItemChecked: false }, { question: 'This app is difficult to use', isItemChecked: false }, { question: 'Other', isItemChecked: false }];
  selectquestions = [];
  constructor() { }

  ngOnInit() {
  }

  verifyEvent(ev: any) {
    console.log(ev);
    // if (ev.isItemChecked == true) {
    //   this.selectquestions.push(ev.question)
    //   console.log('selectquestions aray', this.selectquestions)
    // }
    // if (ev.isItemChecked == false) {

    //   const index = this.selectquestions.indexOf(ev.question);
    //   if (index > -1) {
    //     this.selectquestions.splice(index, 1); // 2nd parameter means remove one item only
    //     console.log('job aray', this.selectquestions)
    //   }

    // }
  }


}
