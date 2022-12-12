import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GoogleMap, Marker } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-jobsmaps',
  templateUrl: './jobsmaps.page.html',
  styleUrls: ['./jobsmaps.page.scss'],
})
export class JobsmapsPage implements OnInit {
  @ViewChild('map') mapRef: any = ElementRef;
  map: any = GoogleMap;
  markerscheck = [
    {
      coordinate: {
        lat: 30.1575,
        lng: 71.5249,
      }
    },
    {
      coordinate: {
        lat: 31.5204,
        lng: 74.3587,
      }
    }
  ]

  constructor(public router: Router) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.createMap()
  }

  async createMap() {
    // AIzaSyAncWVozZi9mUrnaxdDJJE_rgRY5M-wD54
    this.map = await GoogleMap.create({
      id: 'my-map', // Unique identifier for this map instance
      element: this.mapRef?.nativeElement, // reference to the capacitor-google-map element
      apiKey: 'AIzaSyAncWVozZi9mUrnaxdDJJE_rgRY5M-wD54', // Your Google Maps API Key
      forceCreate: true,
      config: {
        center: {
          // The initial position to be rendered by the map
          lat: 30.1575,
          lng: 71.5249,
        },

        zoom: 8, // The initial zoom level to be rendered by the map
      },

    });
    // const markerId = await this.map.addMarker({
    //   coordinate: {
    //     lat: 30.1575,
    //     lng: 71.5249,
    //   }
    // });
    // const markerId1 = await this.map.addMarker({
    //   coordinate: {
    //     lat: 31.5204,
    //     lng: 74.3587,
    //   }
    // });
    this.addmarkers();

  }

  async addmarkers() {
    // const markers: Marker[] = [
    //   {
    //     coordinate: {
    //       lat: 30.1575,
    //       lng: 71.5249,
    //     }
    //   },
    //   {
    //     coordinate: {
    //       lat: 31.5204,
    //       lng: 74.3587,
    //     }
    //   }

    // ];
    await this.map.addMarkers(this.markerscheck);
    this.map.setOnMarkerClickListener(async (marker: any) => {
      console.log(marker);

    })
    this.map.setOnInfoWindowClickListener(async (marker: any) => {
      console.log('info', marker);

    })
  }
  goToLogin() {
    this.router.navigate(['signin'])
  }

  goToSignup() {
    this.router.navigate(['getstarted']);
  }
}
