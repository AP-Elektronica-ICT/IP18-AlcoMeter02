import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GeocodeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GeocodeProvider {
  APIUrl = 'https://maps.googleapis.com/maps/api/geocode/json?';
  APIKey = 'AIzaSyBpIJHzo06e1bzOQS-FCmz75r9xmD5z-NY';

  constructor(public http: HttpClient) {
    console.log('Hello GeocodeProvider Provider');
  }

  getCountry(lat,long){
    
      return this.http.get<IRootObject>(this.APIUrl + 'latlng=' + lat + ',' + long + '&result_type=country&key=' + this.APIKey + '&language=en')
    
  }

  
}


  export interface IAddressComponent {
      long_name: string;
      short_name: string;
      types: string[];
  }

  export interface INortheast {
      lat: number;
      lng: number;
  }

  export interface ISouthwest {
      lat: number;
      lng: number;
  }

  export interface Bounds {
      northeast: INortheast;
      southwest: ISouthwest;
  }

  export interface ILocation {
      lat: number;
      lng: number;
  }

  export interface INortheast2 {
      lat: number;
      lng: number;
  }

  export interface ISouthwest2 {
      lat: number;
      lng: number;
  }

  export interface IViewport {
      northeast: INortheast2;
      southwest: ISouthwest2;
  }

  export interface IGeometry {
      bounds: Bounds;
      location: Location;
      location_type: string;
      viewport: IViewport;
  }

  export interface IResult {
      address_components: IAddressComponent[];
      formatted_address: string;
      geometry: IGeometry;
      place_id: string;
      types: string[];
  }

  export interface IRootObject {
      results: IResult[];
      status: string;
  }





