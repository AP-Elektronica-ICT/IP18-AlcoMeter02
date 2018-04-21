import { Injectable } from '@angular/core';
import { AngularFireDatabase, snapshotChanges} from 'angularfire2/database';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';

@Injectable()
export class AuthProvider {
  public loginState:Boolean = false;
  public UID:string;
  public phone:number;
  constructor(public firebaseProvider: FirebaseProvider) {
    if(this.loginState){
      this.UID = this.getLoggedUID();
      this.phone = this.getPhoneNumber();
    }
  }
  getLoggedUID() : string{
    this.UID = firebase.auth().currentUser.uid;
    return this.UID;
  }
  getPhoneNumber(){
    this.phone = this.firebaseProvider.getPhone(this.UID).subscribe(val => this.phone = val);
    return this.phone;
  }
  logout() {
    if(this.loginState == true){
      firebase.auth().signOut();
      this.loginState = false;
      this.UID = null;
    }
  }
}