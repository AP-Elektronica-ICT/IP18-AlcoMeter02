import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { FirebaseProvider } from './../../providers/firebase/firebase';

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




  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
  }
  public mail: any = ""; 
  pass: any = ""; 
  public weight: number;
  public height = 50;
  public birthDate;
  public gender;
  public firstName;
  public lastName;
  public userID1;
  
  
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
    
    firebase.auth().createUserWithEmailAndPassword(this.mail, this.pass).then(function(response){
      var userID = firebase.auth().currentUser.uid;
      this.nextPage(); 
      
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    });

    
    

  }

}