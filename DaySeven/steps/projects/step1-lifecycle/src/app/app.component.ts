import { Component, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

    <div >
      <h1>App Component</h1>
        <hr>
        <input #ti type="text" (change)="title=ti.value">
        <input #ti type="checkbox" (change)="show=!show">
        <input #rng type="number" (input)="power=rng.value">
        <app-child *ngIf="show" [power]="power" [message]="title"></app-child>

    </div>


  `,
  styles: []
})
export class AppComponent implements OnInit,OnChanges,OnDestroy {
  title = 'step1-lifecycle';
  power:any=1;
  show=true;
  constructor(){
    console.log("AppComponent's constructor was called");

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("AppComponent's ng onchange was called");
  }
  ngOnInit(){
    console.log("AppComponent's ngOninit was called");
  }
  ngOnDestroy(): void {
    console.log("AppComponent's ngOnnDestroy was called");
  }
}
/*
Angular
created
updated
destroyed
*/

