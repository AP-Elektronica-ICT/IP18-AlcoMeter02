import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ContactPage } from '../pages/contact/contact';
import { AboutPage } from '../pages/about/about';
import { SettingsPage } from '../pages/settings/settings';
import { ResultPage} from '../pages/result/result';
import * as firebase from 'firebase/app'; 
import { HomePage } from '../pages/home/home';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { AuthProvider } from '../providers/auth/auth';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { AlcHistoryPage } from '../pages/alc-history/alc-history';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  pageTitle: string;
  pages: Array<{title: string, page: any}>;
  userId : string;
  
  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    auth: AuthProvider,
    private androidPermissions: AndroidPermissions
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      if (platform.is('cordova')) {
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION).then(
          result => console.log('Has permission?',result.hasPermission),
          err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION)
        );
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(
          result => console.log('Has permission?',result.hasPermission),
          err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
        );
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_LOCATION_EXTRA_COMMANDS).then(
          result => console.log('Has permission?',result.hasPermission),
          err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_LOCATION_EXTRA_COMMANDS)
        );
      } else {
        // Cordova not accessible, add mock data if necessary
      }
      
    });
    this.pages = [
      { title: 'Home', page: AboutPage },
      /*{ title: 'Result', page: ResultPage },
      { title: 'Tutorial', page: TutorialPage },*/
      { title: 'History', page: AlcHistoryPage },
      { title: 'Settings', page: SettingsPage }
    ];
    if(firebase.auth().currentUser != null){
      this.userId = firebase.auth().currentUser.uid;
    }
  }
  
  openPage(page) {
    this.rootPage = page.page;
  }
}
