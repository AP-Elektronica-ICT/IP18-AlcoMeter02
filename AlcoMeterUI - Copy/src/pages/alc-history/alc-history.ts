import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, LoadingController, ToastController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireObject,  AngularFireList } from 'angularfire2/database';
import { Chart } from 'chart.js';
import firebase from 'firebase';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { AuthProvider } from './../../providers/auth/auth';


@Component({
  selector: 'page-alc-history',
  templateUrl: 'alc-history.html',
})
export class AlcHistoryPage {
  @ViewChild('lineCanvas') lineCanvas;
  todoList$: AngularFireList<any[]>;
  private lineChart: any;
  items;
  userID;
  xArray: any[] = [];
  yArray: any[] = [];
  monthString;
  constructor(public navCtrl: NavController, private afDatabase: AngularFireDatabase, private fireBaseProvider:FirebaseProvider, private Auth: AuthProvider){
    
  }
  ngOnInit(){

    this.userID = this.Auth.getLoggedUID();
    var DateObject = new Date();
    var year = DateObject.getFullYear();
    var month = DateObject.getUTCMonth();

    switch(month){
      case 0:
        this.monthString = 'January';
        break;
      case 1:
        this.monthString = 'February';
        break;
      case 2: 
        this.monthString = 'March';
        break;
      case 3:
        this.monthString = 'April';
        break;
      case 4:
        this.monthString = 'May';
        break;
      case 5: 
        this.monthString = 'June';
        break;
      case 6:
        this.monthString = 'July';
        break;
      case 7:
        this.monthString = 'August';
        break;
      case 8: 
        this.monthString = 'September';
        break;
      case 9:
        this.monthString = 'Octobre';
        break;
      case 10:
        this.monthString = 'November';
        break;
      case 11: 
        this.monthString = 'December';
        break;
      
    }

    this.items= firebase.database().ref('ReadingDatabase/Users/' + this.userID + '/' + year + '/' + month + '/').orderByKey();
    console.log('ReadingDatabase/Users/' + this.userID + '/' + year + '/' + month);
    console.log(this.items);
    this.items.on('value', (snapshot) =>{
      this.xArray.splice(0,this.xArray.length);
      this.yArray.splice(0,this.yArray.length);
      snapshot.forEach((childSnapshot) =>{
        var temp = String(childSnapshot.key);
        var year = temp.slice(0,4);
        var month = String(+temp.slice(4,6) + 1);
        var Day = temp.slice(6,8);
        var Hour = temp.slice(8,10);
        var Minutes = temp.slice(10,12);
        var stringforlabel = Day + '/' + month + '/' + year + " " + Hour + ':' + Minutes
        this.xArray.push(stringforlabel);
        this.yArray.push(childSnapshot.val());
      });
      this.basicChart(this.xArray, this.yArray);
    });
  }


  basicChart(key, value){
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: key,
        
        datasets: [{
          label: "Alcohol Promile History",
          fill: true,
          lineTenstion:0.1,
          backgroundColor: "rgba(72,138,255,0.4)",
          borderColor: "rgba(72,138,255,1)",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "rgba(72,138,255,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 8,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(72,138,255,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 3,
          pointHitRadius: 10,
          data: value,
          spanGaps:false,
        }]
      },
      options:{
        scales:{
          xAxes:[{
            scaleLabel:{
              
              labelString: 'Months'
            },
            display: false
          }],
        }
      }
    });
  }

}