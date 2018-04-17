import { NgModule } from '@angular/core';
import { GoogleComponent } from './google/google';
import { CustomNavbarComponent } from './custom-navbar/custom-navbar';
import { CallForHelpComponent } from './call-for-help/call-for-help';

@NgModule({
	declarations: [
		CustomNavbarComponent,
		CallForHelpComponent,
		GoogleComponent],
	imports: [],
	exports: [
		CustomNavbarComponent,
		CallForHelpComponent,
		GoogleComponent]
})
export class ComponentsModule {}
