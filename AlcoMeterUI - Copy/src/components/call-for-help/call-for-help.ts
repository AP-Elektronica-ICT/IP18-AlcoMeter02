import { Component } from '@angular/core';

/**
 * Generated class for the CallForHelpComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'call-for-help',
  templateUrl: 'call-for-help.html'
})
export class CallForHelpComponent {

  text: string;

  constructor() {
    console.log('Hello CallForHelpComponent Component');
    this.text = 'Hello World';
  }

}
