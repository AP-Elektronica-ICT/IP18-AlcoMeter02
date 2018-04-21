import { Component} from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { ResultPage } from '../result/result';
import { AboutPage } from '../about/about';
import { ContactPage} from '../contact/contact';
import { SettingsPage} from '../settings/settings';
import { RegisterPage} from '../register/register';
import * as firebase from 'firebase';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { AuthProvider } from './../../providers/auth/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  rs = RegisterPage;
  ct = ContactPage;

  loginForm: FormGroup;

  userId: string;
  currentUser: any;
  errorMessage: string;
  constructor(
    public nav: NavController, 
    public firebaseProvider: FirebaseProvider, 
    public auth: AuthProvider,
    private formBuilder: FormBuilder,
    public alertCtr: AlertController
  ) {
      this.loginForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      });
  }
  async login(){
    var me = this;
    const user = await firebase.auth().signInWithEmailAndPassword(
      this.loginForm.controls['email'].value, 
      this.loginForm.controls['password'].value)
    .catch(function(error) {
      console.log("Login failed!");
      alert(error.message);
    });
    if(user){
        console.log(user);
        this.auth.loginState = true;
        me.nav.push(AboutPage);
    }
    if(firebase.auth().currentUser != null){
      this.userId = firebase.auth().currentUser.uid;
    }
    
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
}