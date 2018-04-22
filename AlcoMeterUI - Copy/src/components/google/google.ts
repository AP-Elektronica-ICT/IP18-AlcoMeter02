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
  selector: 'google-component',
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
    
<<<<<<< HEAD
     
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
   
  }, (err) => {
    console.log(err);
  });
=======
    

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      let marker: google.maps.Marker = new google.maps.Marker({
        map: this.map,
        position: latLng
  })
 
    }, (err) => {
      console.log("err");
    });
>>>>>>> de4eabfb143443fe6ac5ddf733530b4581f5499c

  }

}


