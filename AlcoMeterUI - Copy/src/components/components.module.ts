import { NgModule } from '@angular/core';
import { GoogleComponent } from './google/google';
@NgModule({
	declarations: [GoogleComponent],
	imports: [],
	exports: [GoogleComponent]
})
export class ComponentsModule {}

import { NgModule } from '@angular/core';
import { CustomNavbarComponent } from './custom-navbar/custom-navbar';
import { CallForHelpComponent } from './call-for-help/call-for-help';

@NgModule({
	declarations: [CustomNavbarComponent,
    CallForHelpComponent],
	imports: [],
	exports: [CustomNavbarComponent,
    CallForHelpComponent]
})
export class ComponentsModule {}
