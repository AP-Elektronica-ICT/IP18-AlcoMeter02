import { Injectable } from '@angular/core';
import { AngularFireDatabase, snapshotChanges} from 'angularfire2/database';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import * as firebase from 'firebase';



@Injectable()
export class AuthProvider {
  public userId : string;
  public logged : Boolean;
   constructor(){
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.userId = user.uid;
      }
    });
   }
   checkIfLoggedIn() : Boolean {
     if(firebase.auth().currentUser.uid != null){
      this.logged = true;
      return true;
     } else{
       this.logged = false;
       return false;
     }
   }
   getCurrentUserId() : string {
     if(this.checkIfLoggedIn()){
       this.userId = firebase.auth().currentUser.uid;
       return firebase.auth().currentUser.uid;
     }
   }
   logOut()
   {
     if(this.checkIfLoggedIn()){
      firebase.auth().signOut();
     }
   }

}