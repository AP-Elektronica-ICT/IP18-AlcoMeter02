import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  mail: any = ""; 
  pass: any = ""; 

  agreement: boolean; 

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  register() {
    if(this.agreement == true){
    firebase.auth().createUserWithEmailAndPassword(this.mail, this.pass).then((response) =>{
      alert("hello");
      alert("thanks for agreeing"); 
    })
    .catch((error) =>{
      alert("thanks for agreeing, unfortunatly something went wrong!")
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }
  else{
    alert("You have to agree to send data to register to this service!"); 
  }
  }
}
