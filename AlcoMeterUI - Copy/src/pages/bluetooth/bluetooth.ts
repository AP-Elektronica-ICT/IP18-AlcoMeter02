
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-bluetooth',
  templateUrl: 'bluetooth.html'
})
export class BluetoothPage {

  readOk: Boolean;
  connected: Boolean; 
  conn: String; 
  value: String; 

  constructor(private bluetoothSerial: BluetoothSerial, private alertCtrl: AlertController) {
    bluetoothSerial.enable();
  }

  startScanning() {
    this.bluetoothSerial.write('a').then((data: any)=>{
      this.checkConn(); 
    })
    .catch((e)=>{
      this.errorBl(); 
    }); 
  }
  checkConn(){
    this.readOk = false; 
    do {
      this.bluetoothSerial.available()
      .then((number: any) => {
        this.bluetoothSerial.read()
        .then((data: any) => {
          if (data[0] == "O"){
            this.bluetoothSerial.clear(); 
            this.readOk = true; 
            this.conn = "connected"; 
          }
        });
      });
    } while(this.readOk == false);
  }
  errorBl(){
    alert("Check if you are connected with the right bluetooth device."); 
    this.conn = "not connected"; 
  }
  getMeasurement(){
    this.bluetoothSerial.write('b').then((data: any)=>{
      this.measure(); 
    })
    .catch((e)=>{
      this.errorBl(); 
    }); 
  }
  measure(){
    this.readOk = false; 
    do {
      this.bluetoothSerial.available()
      .then((number: any) => {
        this.bluetoothSerial.read()
        .then((data: any) => {
          if (data[0] == 'M'){
            this.value = data[1] + data[2] + data[3] + data[4] + data[5]; 
            this.bluetoothSerial.clear(); 
            this.readOk = true; 
            this.conn = "connected"; 
          }
        });
      });
    } while(this.readOk == false);
  }
}