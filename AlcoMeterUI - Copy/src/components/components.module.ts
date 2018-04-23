import { NgModule } from '@angular/core';
import { GoogleComponent } from './google/google';
import { CustomNavbarComponent } from './custom-navbar/custom-navbar';
import { CallForHelpComponent } from './call-for-help/call-for-help';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

@NgModule({
	declarations: [
		CustomNavbarComponent,
		CallForHelpComponent,
		GoogleComponent,
  
	],
	imports: [
		IonicModule.forRoot(CustomNavbarComponent),
		IonicModule.forRoot(CallForHelpComponent),
		IonicModule.forRoot(GoogleComponent),
	],
	exports: [
		CustomNavbarComponent,
		CallForHelpComponent,
		GoogleComponent,
   
	]
})
export class ComponentsModule {}
