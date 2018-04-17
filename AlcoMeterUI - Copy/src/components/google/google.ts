import { Component, ViewChild } from '@angular/core';
import {} from '@types/googlemaps';
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

  constructor() {

  }

  ngOnInit(){
    this.initMap();
  }

  initMap(){

    let coords = new google.maps.LatLng(51.2300507,4.41608839);
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
