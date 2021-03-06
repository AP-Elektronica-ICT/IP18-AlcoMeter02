import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { ResultPage } from '../result/result';
import { TutorialPage } from '../tutorial/tutorial';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  GoResult = ResultPage;
  rs = TutorialPage;
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {

  }
  Load() {
    this.loadingCtrl.create({
      spinner: "dots",
      content: "Please wait for your result",
      
      duration: 6000,
      dismissOnPageChange:	false
      //dismissOnPageChange: true
    }).present();

    setTimeout(() => {
      this.navCtrl.push(ResultPage);
    }, 5000);

    
  }
}
