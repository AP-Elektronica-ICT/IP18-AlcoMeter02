import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';

import { ResultPage } from '../../pages/result/result';
import { AboutPage } from '../../pages/about/about';
import { SettingsPage } from '../../pages/settings/settings';
import { HomePage } from '../../pages/home/home';
import { ContactPage } from '../../pages/contact/contact';
import { TabsPage } from '../../pages/tabs/tabs';

/**
 * Generated class for the CustomNavbarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'custom-navbar',
  templateUrl: 'custom-navbar.html'
})
export class CustomNavbarComponent {
  rootPage: any;
  text: string;
  pageTitle: string;
  constructor(public menuCtrl: MenuController, public nav: NavController) {
    this.text = 'Hello World';
  }
  
  
  openSettings(){
    console.log("openSettings");
    this.nav.push(SettingsPage);
  }
  openNavigation(){
    console.log("openNavigation");
    this.menuCtrl.open();
  }
  category: any;
  openPage(p) {
    this.rootPage = p;
  }
}
