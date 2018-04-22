import { Component } from '@angular/core';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { AlertController } from 'ionic-angular';
import { AuthProvider } from './../../providers/auth/auth';
import { NavController} from 'ionic-angular';
import { HomePage } from '../home/home';
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
  public phone : number;
  constructor(
    public firebaseProvider: FirebaseProvider, 
    public alertCtrl: AlertController, 
    public auth: AuthProvider,
    public nav: NavController
  ) {
    this.firebaseProvider.getPhone(this.userId).subscribe(val => { this.phone = val });
    if(this.auth.loginState){
      this.auth.UID = this.auth.getLoggedUID();
      this.auth.phone = this.getUserData(this.auth.UID);
    }
  }
  ngOnInit(){

  }
  getUserData(id : string){
    return this.firebaseProvider.getPhone(id).subscribe(val => this.phone = val);
  }
  updateSettings(){
    if(this.phone != null){
      this.firebaseProvider.updateUser(this.userId, this.phone);
      this.showAlert();
    }
  }
  logout(){
    this.auth.logout();
    this.nav.push(HomePage);
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
