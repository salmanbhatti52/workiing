import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GoogleMap, Marker } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { MenuController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-jobsmaps',
  templateUrl: './jobsmaps.page.html',
  styleUrls: ['./jobsmaps.page.scss'],
})
export class JobsmapsPage implements OnInit {
  title: any;
  test: any;
  markerscheck = [
    {
      coordinate: {
        lat: 30.2179,
        lng: 71.4856,
      },
      title: 'hellow'
    },
    {
      coordinate: {
        lat: 31.5204,
        lng: 74.3587,
      },
      title: 'hellowworl'
    }
  ]
  @ViewChild('map') mapRef: any = ElementRef;
  map: any = GoogleMap;

  constructor(public router: Router,
    public location: Location,
    public navCtrl: NavController,
    public menuCtrl: MenuController) { }

  ngOnInit() {
    // this.test = "<h1>Hello<h1><h2>Mr<h2>";
  }

  ionViewDidEnter() {
    this.createMap();
    this.menuCtrl.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving this page
    this.menuCtrl.enable(true);
    this.map.destroy();
  }

  back() {
    this.location.back()
  }

  async createMap() {
    // AIzaSyAncWVozZi9mUrnaxdDJJE_rgRY5M-wD54;
    // 'AIzaSyA7ks8X2YnLcxTuEC3qydL2adzA0NYbl6c Ali key is not for build//
    this.map = await GoogleMap.create({
      id: 'my-map', // Unique identifier for this map instance
      element: this.mapRef?.nativeElement, // reference to the capacitor-google-map element
      apiKey: 'AIzaSyA7ks8X2YnLcxTuEC3qydL2adzA0NYbl6c', // Your Google Maps API Key
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
    await this.map.addMarkers(this.markerscheck)
    this.map.setOnMarkerClickListener(async (marker?: any) => {
      console.log(marker);
      // this.title = marker.title;
      this.test = "<h1>" + marker.title + "<h1>";
    })
    this.map.setOnInfoWindowClickListener(async (marker: any) => {
      console.log('info', marker);

    })

  }
  goToLogin() {
    this.navCtrl.navigateForward(['signin'])
  }

  goToSignup() {
    this.navCtrl.navigateForward(['getstarted']);
  }

  gsignin() {

  }
}
