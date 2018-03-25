import { Component, ViewChild } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { ResultPage } from '../result/result';
import { AboutPage } from '../about/about';
import { ContactPage} from '../contact/contact';
//import {GoogleMaps, GoogleMap, GoogleMapsEvent,GoogleMapOptions,CameraPosition,MarkerOptions,Marker} from '@ionic-native/google-maps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  @ViewChild("map") mapElement;
  map: any;
  rs = AboutPage;
  GoResult = ResultPage;

  constructor(public loadingCtrl: LoadingController){ }

  Load() {
    this.loadingCtrl.create({
      //spinner: "true",
      content: "Please wait for your result",
      
      duration: 3000,
      dismissOnPageChange:	true
      //dismissOnPageChange: true
    }).present();
  }
  

  ngOnInit() {
    this.initMap();
   }

   initMap(){

    let coords = new google.maps.LatLng(25,80);
    let mapOptions: google.maps.MapOptions = {
      center: coords,
      zoom: 11,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions)

    let marker: google.maps.Marker = new google.maps.Marker({
      map: this.map,
      position: coords
    })

  }

}