import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-superman',
  template: `
    <h1>
      superman works!
    </h1>
    <h2>
    Quantity to display:{{quantityparams ||'not assign Yet'}}
  </h2>
  `,
  styles: [
  ]
})
export class SupermanComponent implements OnInit {
  quantityparams='';
  constructor(private ar:ActivatedRoute){}
  ngOnInit():void{
    this.quantityparams=this.ar.snapshot.params['qty']
  }

}
