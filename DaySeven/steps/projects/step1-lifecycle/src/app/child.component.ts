import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h2> child Component </h2>
    <h3> Message:{{message}} </h3>
    <h3> Power:{{power}} </h3>
  `,
  styles: [
  ]
})
export class ChildComponent implements OnChanges,OnInit,OnDestroy,AfterViewInit,AfterContentChecked,AfterContentInit, AfterViewChecked,DoCheck {
  @Input()  message:any="default message"
  @Input()  power:any=0;
  constructor(){
    console.log("ChildComponent's constructor was called");

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ChildComponent's ng onchange was called");
    console.log("********************************************");
      if(changes['power'].currentValue>10){
        this.power=10;
      }

    console.log("********************************************");


  }
  ngOnInit(){
    console.log("ChildComponent's ngOninit was called");
  }
  ngAfterContentInit(): void {
    console.log("ChildComponent's ngafterContentInit was called");
  }
  ngAfterContentChecked(): void {
    console.log("ChildComponent's ngafterContentChecked was called");

  }
  ngAfterViewChecked(): void {
    console.log("ChildComponent's ngafterViewChecked was called");
  }
  ngAfterViewInit(): void {
    console.log("ChildComponent's ngafterViewInit was called");
  }
  ngDoCheck(): void {
    console.log("ChildComponent's ngDocheck was called");
  }
  ngOnDestroy(): void {
    console.log("ChildComponent's ngOnnDestroy was called");
  }
}
