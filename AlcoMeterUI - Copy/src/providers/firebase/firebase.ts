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

  addItem(userID, age, gender, location, alcoholLevel){
    var DateObject = new Date();
    var year = DateObject.getFullYear();
    var month = DateObject.getUTCMonth();
    var seconden = DateObject.getUTCSeconds();
    var milliseconds = DateObject.getUTCMilliseconds();
    var date = DateObject.getDate();
    var minutes = DateObject.getMinutes();
    var hour = DateObject.getHours();
    var sortingms = Date.UTC(year,month,date,hour,minutes,seconden,milliseconds);

    if(date < 10){var daystring = ("0" + date).slice(-2);}else{daystring = date.toString()}                         
    if(month < 10){var monthstring = ("0" +month).slice(-2);}else{monthstring = month.toString();}                 
    if(minutes < 10){var minutesstring = ("0" +minutes).slice(-2);}else{ minutesstring = minutes.toString();}       
    if(hour < 10){var hourstring = ("0" +hour).slice(-2);}else{ hourstring = hour.toString();}              

    var datestring = daystring + '/' + monthstring +'/' + year;                                                                              
    var timestring = hourstring + ':' + minutesstring;
    var databaseString = year + monthstring +  daystring +  hourstring +  minutesstring + seconden
    const itemRef = this.db.database.ref('ReadingDatabase/Readings/').push().set({                
      date : datestring, time: timestring, age:age, gender:gender,                                
      location:location, alcoholLevel:alcoholLevel, sortingms:sortingms                            
    })                                                                                            
    
    const itemRef2 = this.db.database.ref('ReadingDatabase/Users/' + userID + '/' + year + '/' + month + '/').update({   
      [databaseString]:alcoholLevel  
    })                                                                                           
  }

  addUser(userID,birthDay,birthMonth,birthYear, gender, firstName, lastName, email, phoneNumber ){
    var userCount:number;     
    this.db.database.ref('UserDatabase/Users/UserCount').on('value', snapshot =>{
      userCount = snapshot.val();
    }); 
                 
    const itemRef = this.db.database.ref('UserDatabase/Users/' + userID).set({                    //
      firstName:firstName, lastName:lastName, gender:gender,                                      // adds user into user database
      birthDay:birthDay, birthMonth:birthMonth, birthYear:birthYear,email:email,                  //
      phoneNumber: phoneNumber
    }) ;                                                                                          //
    userCount++;                                                                                  // this is number of users 
    const itemRef2 = this.db.database.ref('UserDatabase/Users').update({UserCount:userCount})     //
  }                                                                                               
  
  updateUser(userID, phoneNumber){                               //
    var userRef = this.db.database.ref('UserDatabase/Users');            //
    var specificRef = userRef.child(userID);                             //git
    /*if (height != -1) {                                                //
      specificRef.update({height:height})                                //
    }                                                                    //  Updates user with UserID:userID
    if (weight != -1) {                                                  //  Updates the email,height and/or weight
      specificRef.update({weight:weight})                                //  If value doesn't need to change use values:
    }  */                                                                //       gender: "."
    if (phoneNumber != "."){                                             //       phoneNumber: "."
      specificRef.update({phoneNumber:phoneNumber});                     //
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
  /*getWeight(userID){
    var weight;
    weight = this.db.object('UserDatabase/Users/' + userID + '/weight').valueChanges();
    return weight;
  }*/
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
  }/*
  getHeight(userID){
    var height;
    height = this.db.object('UserDatabase/Users/' + userID + '/height').valueChanges();
    return height;
  }*/
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
  getEmail(userID){
    var email;
    email= this.db.object('UserDatabase/Users/' + userID + '/email').valueChanges();
    return email;
  }
  getPhone(userID){
    var phone;
    phone = this.db.object('UserDatabase/Users/' + userID + '/phoneNumber').valueChanges();
    return phone;
  }

  //#endregion "getUserVars"
}
