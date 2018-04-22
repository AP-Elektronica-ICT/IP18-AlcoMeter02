import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { AuthProvider } from './../../providers/auth/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AboutPage } from '../about/about';

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
  registerForm: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public firebaseProvider: FirebaseProvider,
    private formBuilder: FormBuilder,
    public auth: AuthProvider
  ) {
      this.registerForm = this.formBuilder.group({
        email: ['', Validators.compose([
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
          Validators.required
        ])],
        password: ['', Validators.compose([
          Validators.minLength(6),
          Validators.required
        ])],
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        birthdate: ['', Validators.required],
        gender: ['', Validators.required]
      });
  }
  onSignIn() {
    //this.logger.info('SignInPage: onSignIn()');
  }
  
  ngOnInit(){
    firebase.auth().onAuthStateChanged(function(user){
      if(user){
        firebase.auth().signOut();
      }
    })
    
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }



  register() {
    var me = this;
    firebase.auth().createUserWithEmailAndPassword(
      this.registerForm.controls['email'].value, 
      this.registerForm.controls['password'].value)
    .then((response) =>{
        var userID = firebase.auth().currentUser.uid;
        var date = this.registerForm.controls['birthdate'].value;
        var datestring = date.replace(/-/g,"");
        var year = datestring.substr(0,4);
        var month = datestring.substr(4,2);
        var day = datestring.substr(6,2);

      this.firebaseProvider.addUser(
        userID,
        day,
        month,
        year,
        this.registerForm.controls['gender'].value,
        this.registerForm.controls['firstname'].value,
        this.registerForm.controls['lastname'].value,
        this.registerForm.controls['email'].value,
        ".");
      firebase.auth().signInWithEmailAndPassword(
        this.registerForm.controls['email'].value, 
        this.registerForm.controls['password'].value)
      .then(function(response){
        console.log(response);
        me.auth.loginState = true;
        me.navCtrl.push(AboutPage);
        console.log("nextPage worked!");
      })
      .catch(function(error) {
        var errorMessage = error.message;
        alert(errorMessage);
      });
      
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
      console.log(errorMessage);
    });
    
  }

}