import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../../pages/about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  rs = AboutPage;
  constructor(private nav: NavController){

  }
  
}
