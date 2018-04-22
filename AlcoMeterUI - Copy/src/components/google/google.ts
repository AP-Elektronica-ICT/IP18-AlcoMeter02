import { Component, ViewChild } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { NavController } from 'ionic-angular';
import {} from '@types/googlemaps';
import { map } from 'rxjs/operator/map';
/**
 * Generated class for the GoogleComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'google',
  templateUrl: 'google.html'
})
export class GoogleComponent {
  google;
  @ViewChild("map") mapElement;
  map: any;

  constructor(public navCtrl: NavController, public geolocation: Geolocation) {

  }

  ngOnInit(){
    this.initMap();
  }
  

  initMap(){
    this.geolocation.getCurrentPosition().then((position) => {
 
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
      let mapOptions = {
        center: latLng,
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
    
     
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
   
  }, (err) => {
    console.log(err);
  });

}

}


