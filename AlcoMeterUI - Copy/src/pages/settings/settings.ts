import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { AlertController } from 'ionic-angular';
import * as firebase from 'firebase';
import { HttpClient } from "@angular/common/http";
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  public userId : string;
  public phone : string;
  phoneInput : string;
  constructor(private http: HttpClient, public firebaseProvider: FirebaseProvider, public alertCtrl: AlertController) {
    this.firebaseProvider.getPhone(this.userId).subscribe(val => { this.phoneInput = val });
    if(firebase.auth().currentUser != null){
      this.userId = firebase.auth().currentUser.uid;
      this.getUserData(this.userId);
    }
  }
  ngOnInit(){

  }
  getUserData(id : string){
    this.firebaseProvider.getPhone(id).subscribe(val => this.phone = val);
  }
  updateSettings(){
    if(this.phoneInput != null){
      this.firebaseProvider.updateUser(this.userId, this.phoneInput);
      this.showAlert();
    }
  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Wijziging',
      subTitle: 'Telefoonnummer opgeslagen!',
      buttons: ['OK']
    });
    alert.present();
  }
}
