import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { NavController } from '@ionic/angular';
import { Location } from '@angular/common';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {
  @ViewChild('mySegment', { read: ElementRef }) private mySegment!: ElementRef;
  requestsType: any;
  allItems = [];
  items: any;
  gettypename: any;
  flagimg = '/assets/imgs/flag.svg';
  countrycode = '+1';
  showPass = false;
  upicon = false;
  flaglist = false;
  showflags = true;

  optionArr = [
    { id: 1, name: '18 or Over' },
    { id: 2, name: 'Under 18' },
  ];
  jobsArr = [{ id: 1, name: 'Full Time' },
  { id: 2, name: 'Part Time' },
  { id: 3, name: 'Both' }]
  activesearches = [
    { id: 1, name: 'Yes' },
    { id: 2, name: 'No' },
  ];
  selectedoptIdReply = 0;
  selectedoptjob = 0;
  empsearch = 0;
  constructor(public route: ActivatedRoute,
    public http: HttpClient,
    public navCtrl: NavController,
    public location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back()
  }

  ionViewWillEnter() {
    if (this.requestsType) {
      if (this.requestsType === 'General') {
        this.mySegment.nativeElement.children[0].click();
        console.log('click event', this.mySegment.nativeElement.children[0].click())
      }
      if (this.requestsType === 'Experience') {
        this.mySegment.nativeElement.children[1].click();
      }
      if (this.requestsType === 'Education') {
        this.mySegment.nativeElement.children[1].click();
      }
      if (this.requestsType === 'LookingforJob') {
        this.mySegment.nativeElement.children[1].click();
      }
    } else {
      this.requestsType = 'General';
      this.mySegment.nativeElement.children[0].click();
    }
  }

  segmentChanged(ev: any) {
    if (ev.detail.value === 'General') {
      this.requestsType = 'General';

    }
    if (ev.detail.value === 'Experience') {
      this.requestsType = 'Experience';

    }
    if (ev.detail.value === 'Education') {
      this.requestsType = 'Education';

    }
    if (ev.detail.value === 'LookingforJob') {
      this.requestsType = 'LookingforJob';

    }
    localStorage.setItem('requestType', this.requestsType);
  }

  openfflaglist() {
    if (this.upicon == false) {
      this.upicon = true;
      this.flaglist = true;
    } else {
      this.upicon = false;
      this.flaglist = false;
    }


    this.setItems();
  }
  setItems() {
    this.http.get('assets/countries.json').subscribe(
      (res: any) => {
        this.allItems = res.countries;
        this.items = this.allItems;
        console.log('items', this.items);

      }
    );
  }

  viewDetails(item: any) {
    console.log('item===', item)
    this.flaglist = false
    this.flagimg = item.flag
    this.upicon = false;
    this.countrycode = '+' + item.callingCodes[0];
    console.log('code===', this.countrycode)
  }

  optClickReply(opt: any) {
    console.log('optClickReply', opt);
    this.selectedoptIdReply = opt.id;
  }
  optjobReply(opt: any) {
    this.selectedoptjob = opt.id;
  }
  searchesjobReply(opt: any) {
    this.empsearch = opt.id;
  }

}
