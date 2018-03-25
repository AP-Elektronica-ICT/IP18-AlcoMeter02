import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../../pages/about/about';
import { RegisterPage} from '../../pages/register/register';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app'; 
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { AuthProvider } from './../../providers/auth/auth';
import { ContactPage } from '../contact/contact';
import { SettingsPage } from '../settings/settings';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  rs = RegisterPage;
  ct = ContactPage;

  user: string;
  pass: string;
  userId: string;
  currentUser: any;
  constructor(private nav: NavController, public firebaseProvider: FirebaseProvider, public auth: AuthProvider){
    if(this.userId){
      this.nav.push(SettingsPage);
    }
  }
  ionViewDidLoad() {
    if(firebase.auth().currentUser != null){
      this.userId = firebase.auth().currentUser.uid;
    }
  }
  login(){
    console.log(this.user, this.pass);
    firebase.auth().signInWithEmailAndPassword(this.user, this.pass).then(function(response){
      console.log(firebase.auth().currentUser);
    })
    .catch(function(error) {
      var errorMessage = error.message;
      alert(errorMessage);
    });
    if(firebase.auth().currentUser != null){
      this.userId = firebase.auth().currentUser.uid;
    }
    this.nav.push(AboutPage);
  }
  gLogin(){
    var provider = new firebase.auth.GoogleAuthProvider(); 
    firebase.auth().signInWithRedirect(provider);
    firebase.auth().getRedirectResult().then(function(result) {
      if (result.credential) {
        var token = result.credential.accessToken;
        alert("Logged in with google!")
      }
      var user = result.user;
    }).catch(function(error) {
      var errorMessage = error.message;
      alert("connection with google failed"); 
    });
  }
  fbLogin(){
    var provider = new firebase.auth.FacebookAuthProvider(); 
    firebase.auth().signInWithPopup(provider).then(function(result)  {
      alert("fbLog worked")
      var token = result.credential.accessToken;
      var user = result.user;
    }).catch(function(error) {
      var errorMessage = error.message;
      alert("connection with facebook failed");
    });
  }
  navRegister(){
    this.nav.push(RegisterPage); 
  }
}
