import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { ResultPage } from '../pages/result/result';
import { ContactPage } from '../pages/contact/contact';
import { AboutPage } from '../pages/about/about';
import { SettingsPage } from '../pages/settings/settings';
import { NavController } from 'ionic-angular';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  pageTitle: string;
  pages: Array<{title: string, page: any}>;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.pages = [
      { title: 'Home', page: TabsPage },
      { title: 'Results', page: ResultPage },
      { title: 'Contact', page: ContactPage },
      { title: 'About', page: AboutPage },
      { title: 'Settings', page: SettingsPage }
    ];
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.rootPage = page.page;
    this.pageTitle = page.title;
  }
  
}
