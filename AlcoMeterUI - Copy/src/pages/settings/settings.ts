import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import { CallNumber} from '@ionic-native/call-number';

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

  constructor(private callNumber: CallNumber) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  callMyNumber(){
    this.callNumber.callNumber("0466199015", true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }
}
