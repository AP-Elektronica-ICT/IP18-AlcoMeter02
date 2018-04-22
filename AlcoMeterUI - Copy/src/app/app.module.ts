import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AngularFireModule } from 'angularfire2'; 
import { AngularFireDatabaseModule } from 'angularfire2/database'; 
import { AngularFireAuthModule } from 'angularfire2/auth'; 
import * as firebase from 'firebase/app';
import { CustomNavbarComponent} from '../components/custom-navbar/custom-navbar';
import { CallForHelpComponent} from '../components/call-for-help/call-for-help';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FirebaseProvider } from '../providers/firebase/firebase';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { RegisterPage } from '../pages/register/register';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ResultPage } from '../pages/result/result';
import { GoogleComponent } from '../components/google/google';
import { AuthProvider } from '../providers/auth/auth';
import { CallNumber } from '@ionic-native/call-number';

import { Geolocation } from '@ionic-native/geolocation';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { AlcHistoryPage } from '../pages/alc-history/alc-history';

var config = {
  apiKey: "AIzaSyDp_N4w_BjClGfW9ZNmMOy3PZQL28WLTyI",
  authDomain: "alcometer-abfbf.firebaseapp.com",
  databaseURL: "https://alcometer-abfbf.firebaseio.com",
  projectId: "alcometer-abfbf",
  storageBucket: "alcometer-abfbf.appspot.com",
  messagingSenderId: "1031304897035"
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ResultPage,
    GoogleComponent,
    SettingsPage, 
    CustomNavbarComponent,
    CallForHelpComponent,
    RegisterPage,
    TutorialPage,
    AlcHistoryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
    AngularFireModule.initializeApp(config), 
    AngularFireDatabaseModule, 
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ResultPage,
    SettingsPage,
    RegisterPage,
    TutorialPage,
    AlcHistoryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider,
    AuthProvider,
    Geolocation
  ]
})
export class AppModule {}
