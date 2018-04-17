import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { ResultPage } from '../result/result';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  GoResult = ResultPage;
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {

  }
  Load() {
    this.loadingCtrl.create({
      //spinner: "true",
      content: "Please wait for your result",
      
      duration: 3000,
      dismissOnPageChange:	true
      //dismissOnPageChange: true
    }).present();
  }
}
