import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AngularFireModule } from 'angularfire2'; 
import { AngularFireDatabaseModule } from 'angularfire2/database'; 
import { AngularFireAuthModule } from 'angularfire2/auth'; 
import * as firebase from 'firebase/app';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { RegisterPage } from '../pages/register/register'; 

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CustomNavbarComponent } from '../components/custom-navbar/custom-navbar';
import { CallNumber } from '@ionic-native/call-number';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { HttpModule } from '@angular/http';

export const firebaseConfig = {
  apiKey: "AIzaSyDZp1w9Tl7zI1QKTGCpeyqzTrtTyC-bIew",
  authDomain: "alcometer-abfbf.firebaseapp.com",
  databaseURL: "https://alcometer-abfbf.firebaseio.com",
  projectId: "alcometer-abfbf",
  storageBucket: "alcometer-abfbf.appspot.com",
  messagingSenderId: "1031304897035"
}
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SettingsPage, 
    CustomNavbarComponent,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig), 
    AngularFireDatabaseModule, 
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SettingsPage,
    RegisterPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider
  ]
})
export class AppModule {}
