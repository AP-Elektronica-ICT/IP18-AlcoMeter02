import { Component} from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { ResultPage } from '../result/result';
import { AboutPage } from '../about/about';
import { ContactPage} from '../contact/contact';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
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
  

}