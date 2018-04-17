import { Component, ViewChild} from '@angular/core';
import { Platform } from 'ionic-angular';
import {} from '@types/googlemaps';
import { Geolocation } from '@ionic-native/geolocation';

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
  long;
  lat;

  constructor(private geo: Geolocation, private platform: Platform) {
    this.platform.ready().then(()=>{
      this.geo.getCurrentPosition().then(resp =>{
          this.long = resp.coords.longitude;
          this.lat = resp.coords.latitude;
          console.log(resp.coords.latitude);
          console.log(resp.coords.longitude);
          this.initMap();
      }).catch((err)=>{
          console.log("No location Error")
      });
      
      
    });
  }

  ngOnInit(){
    
  }

  initMap(){

    let coords = new google.maps.LatLng(this.lat,this.long);
    let mapOptions: google.maps.MapOptions = {
      center: coords,
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions)

    let marker: google.maps.Marker = new google.maps.Marker({
      map: this.map,
      position: coords
    })

  }

}
