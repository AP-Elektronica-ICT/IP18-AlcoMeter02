import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, LoadingController, ToastController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireObject,  AngularFireList } from 'angularfire2/database';
import { Chart } from 'chart.js';
import firebase from 'firebase';


@Component({
  selector: 'page-alc-history',
  templateUrl: 'alc-history.html',
})
export class AlcHistoryPage {
  @ViewChild('lineCanvas') lineCanvas;
  todoList$: AngularFireList<any[]>;
  private lineChart: any;
  items;
  xArray: any[] = [];
  yArray: any[] = [];
  constructor(public navCtrl: NavController, private afDatabase: AngularFireDatabase){
    this.items= firebase.database().ref('chart/data').orderByKey();
    this.items.on('value', (snapshot) =>{
      this.xArray.splice(0,this.xArray.length);
      this.yArray.splice(0,this.yArray.length);
      snapshot.forEach((childSnapshot) =>{
        this.xArray.push(childSnapshot.key);
        this.yArray.push(childSnapshot.val());
      });
      this.basicChart(this.xArray, this.yArray);
    });
  }

  basicChart(key, value){
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
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
              display: true,
              labelString: 'Months'
            }
          }],
        }
      }
    });
  }

}