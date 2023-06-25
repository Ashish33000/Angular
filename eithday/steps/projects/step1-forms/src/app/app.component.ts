import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Forms In Angular</h1>
    <app-template/>
    <app-reactive/>
    <app-reactive-builder/>
  `,
  styles: []
})
export class AppComponent {
  title = 'step1-forms';
}
