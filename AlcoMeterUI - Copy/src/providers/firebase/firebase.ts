import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, snapshotChanges} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';


/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {
  
  constructor(public db: AngularFireDatabase) {
    console.log('Hello FirebaseProvider Provider');
    var userCount:number;     
    this.db.database.ref('UserDatabase/Users/UserCount').on('value', snapshot =>{
      userCount = snapshot.val();
    });
  }

  addItem(userID, age, gender, location, alcoholLevel, datestring, timestring , sortingms){
    const itemRef = this.db.database.ref('ReadingDatabase/Readings/').push().set({                //
      date : datestring, time: timestring, age:age, gender:gender,                                // adds Reading into general readingsdatabase 
      location:location, alcoholLevel:alcoholLevel, sortingms:sortingms                           //  
    })                                                                                            //
    
    const itemRef2 = this.db.database.ref('ReadingDatabase/Users/' + userID + '/').push().set({   //
      date: datestring,time:timestring, location:location, alcoholLevel:alcoholLevel, sortingms   // adds Reading into user specific database
    })                                                                                            //
  }

  addUser(userID,birthDay,birthMonth,birthYear, gender, weight, height, firstName, lastName, email ){
    var userCount:number;     
    this.db.database.ref('UserDatabase/Users/UserCount').on('value', snapshot =>{
      userCount = snapshot.val();
    }); 
                 
    const itemRef = this.db.database.ref('UserDatabase/Users/' + userID).set({                    //
      firstName:firstName, lastName:lastName, gender:gender, weight:weight, height:height,        // adds user into user database
      birthDay:birthDay, birthMonth:birthMonth, birthYear:birthYear,email:email                   //
    }) ;                                                                                          //
    userCount++;                                                                                  // this is number of users 
    const itemRef2 = this.db.database.ref('UserDatabase/Users').update({UserCount:userCount})     //
    
  }                                                                                               
  
  updateUser(userID, height , weight , gender){                          //
    var userRef = this.db.database.ref('UserDatabase/Users');            //
    var specificRef = userRef.child(userID);                             //
    if (height != -1) {                                                  //
      specificRef.update({height:height})                                //
    }                                                                    //  Updates user with UserID:userID
    if (weight != -1) {                                                  //  Updates the email,height and/or weight
      specificRef.update({weight:weight})                                //  If value doesn't need to change use values:
    }                                                                    //       height: -1
    if (gender != ".") {                                                 //       weight: -1
      specificRef.update({gender:gender})                                //       gender: "."
    }                                                                    //
  }                                                                      //

 

  getList(){
    var items: Observable<any[]>;
    items = this.db.list('Readings').valueChanges();
    return items;
  }

 
  //Get user vars
  //Subscriben anders krijg je observable
  //#region "getUserVars"
  getWeight(userID){
    var weight;
    weight = this.db.object('UserDatabase/Users/' + userID + '/weight').valueChanges();
    return weight;
  }
  getFirstName(userID){
    var firstName;
    firstName = this.db.object('UserDatabase/Users/' + userID + '/firstName').valueChanges();
    return firstName;
  }
  getLastName(userID){
    var lastName;
    lastName = this.db.object('UserDatabase/Users/' + userID + '/lastName').valueChanges();
    return lastName;
  }
  getGender(userID){
    var gender;
    gender = this.db.object('UserDatabase/Users/' + userID + '/gender').valueChanges();
    return gender;
  }
  getHeight(userID){
    var height;
    height = this.db.object('UserDatabase/Users/' + userID + '/height').valueChanges();
    return height;
  }
  getBirthDay(userID){
    var birthDay;
    birthDay = this.db.object('UserDatabase/Users/' + userID + '/birthDay').valueChanges();
    return birthDay;
  }
  getBirthMonth(userID){
    var birthMonth;
    birthMonth = this.db.object('UserDatabase/Users/' + userID + '/birthMonth').valueChanges();
    return birthMonth;
  }
  getBirthYear(userID){
    var birthYear;
    birthYear= this.db.object('UserDatabase/Users/' + userID + '/birthYear').valueChanges();
    return birthYear;
  }


  //#endregion "getUserVars"
}
