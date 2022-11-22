import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-jobsmaps',
  templateUrl: './jobsmaps.page.html',
  styleUrls: ['./jobsmaps.page.scss'],
})
export class JobsmapsPage implements OnInit {
  @ViewChild('map') mapRef: ElementRef | undefined;
  // map: GoogleMap | undefined;
  constructor() { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    // this.createMap()
  }

  // async createMap() {
  //   this.map = await GoogleMap.create({
  //     id: 'my-map', // Unique identifier for this map instance
  //     element: this.mapRef?.nativeElement, // reference to the capacitor-google-map element
  //     apiKey: 'AIzaSyAncWVozZi9mUrnaxdDJJE_rgRY5M-wD54', // Your Google Maps API Key
  //     forceCreate: true,
  //     config: {
  //       center: {
  //         // The initial position to be rendered by the map
  //         lat: 33.6,
  //         lng: -117.9,
  //       },
  //       zoom: 8, // The initial zoom level to be rendered by the map
  //     },
  //   });
  // }
}
