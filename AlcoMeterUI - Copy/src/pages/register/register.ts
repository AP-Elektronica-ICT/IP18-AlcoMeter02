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
    firebase.auth().createUserWithEmailAndPassword(this.mail, this.pass).then((response) =>{
      var userID = firebase.auth().currentUser.uid;
        var date = this.birthDate;
        var datestring = date.replace(/-/g,"");
        var year = datestring.substr(0,4);
        var month = datestring.substr(4,2);
        var day = datestring.substr(6,2);

      this.firebaseProvider.addUser(userID,day,month,year,this.gender,this.firstName,this.lastName,this.mail, ".");
      console.log("email");
      console.log(this.mail);
      console.log("pass");
      console.log(this.pass);
      firebase.auth().signInWithEmailAndPassword(this.mail, this.pass).then(function(response){
        console.log("nextPage worked!");
        console.log(firebase.auth().currentUser);
      })
      .catch(function(error) {
        var errorMessage = error.message;
        alert(errorMessage);
      });
      
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    });

    
    

  }

  log(){
    var date = this.birthDate;
      var datestring = date.replace(/-/g,"");
      var year = datestring.substr(0,4);
      var month = datestring.substr(4,2);
      var day = datestring.substr(6,2);
      console.log("Year: " +year  +" Month: " + month + " Day: " + day);
  }

}