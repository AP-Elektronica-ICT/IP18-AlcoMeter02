import { Component } from '@angular/core';
import * as firebase from 'firebase/app';
import { FirebaseProvider } from './../../providers/firebase/firebase'; 
import { CallNumber} from '@ionic-native/call-number'; 
import { AuthProvider } from './../../providers/auth/auth';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the CallForHelpComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'call-for-help',
  templateUrl: 'call-for-help.html'
})
export class CallForHelpComponent {

  phone: string;
  isValid: Boolean;
  userId: string;
  constructor(
    public firebaseProvider: FirebaseProvider, 
    public auth: AuthProvider, 
    private callNumber: CallNumber, 
    public alertCtrl: AlertController) {
    if(this.auth.loginState){
      this.userId = this.auth.getLoggedUID();
      async () => {
        await this.firebaseProvider.getPhone(this.userId).subscribe(val => { this.phone = val });
      }
      //console.log(this.phone);
      if(this.phone == "." || this.phone == null)
      {
        this.isValid = false;
      } 
      else
      {
        this.isValid = true;
      }
    }
    console.log("callforhelp isvalid")
    console.log(this.isValid);
    
  }
  callMyNumber(){
      if(this.phone != "."){
        this.callNumber.callNumber(
          this.phone, true)
        .then(res => console.log('Launched dialer!', res))
        .catch(err => console.log('Error launching dialer', err));
        console.log("call success");
      } else{
        this.showMessage();
      }
  }
  showMessage(){
    let alert = this.alertCtrl.create({
      title: 'Telefoon nummer',
      subTitle: 'Er is nog geen telefoonnummer toegevoegd aan uw account!',
      buttons: ['OK']
    });
    alert.present();
    console.log("call failed");
  }

}
