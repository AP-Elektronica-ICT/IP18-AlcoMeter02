import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';

import { SettingsPage } from '../../pages/settings/settings';
import { HomePage } from '../../pages/home/home';
import * as firebase from 'firebase/app'; 
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
  userId: string;

  constructor(public menuCtrl: MenuController, public nav: NavController) {
    if(firebase.auth().currentUser != null){
      this.userId = firebase.auth().currentUser.uid;
    }
  }
  ionViewDidLoad() {
    this.checkUserId();
  }
  checkUserId(){
    if(firebase.auth().currentUser != null){
      this.userId = firebase.auth().currentUser.uid;
    }
  }
  openSettings(){
    this.nav.push(SettingsPage);
  }
  openNavigation(){
    this.menuCtrl.open();
  }
  openPage(p) {
    this.rootPage = p;
  }
}
