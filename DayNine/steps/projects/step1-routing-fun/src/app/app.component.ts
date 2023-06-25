import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Routing in Angular</h1>
  <input #ti type="range" (input)="setInputValue(ti.value)"/>
  <h2>Quantity Selected:{{quantity}}</h2>
  <ul>
  <li><a routerLinkActive="selectedLink" [routerLinkActiveOptions]="{exact:true}" [routerLink]="['']">Home </a></li>
  <li><a routerLinkActive="selectedLink"  [routerLink]="['batman']">Batman </a></li>
  <li><a routerLinkActive="selectedLink"  [routerLink]="['superman',quantity]">Superman</a></li>
  <li><a routerLinkActive="selectedLink" routerLink="'superman'/{{quantity}}">Superman legacy </a></li>
  <li><a routerLinkActive="selectedLink"  [routerLink]="['flash']">Flash</a></li>
  <li><a routerLinkActive="selectedLink"  [routerLink]="['cybrog']">Cybrog</a></li>
  <li><a routerLinkActive="selectedLink"  [routerLink]="['anyotherhero']">Any Other Hero </a></li>
  </ul>
  <hr/>
  <router-outlet></router-outlet>
  `,
  styles: [`
  ul li{
    padding :2px;
  }
  .selectedLink{
    background-color:crimson;
    color:papayawhip;
    padding :2px;
    width:100px;
    display:inline-block;
  }
  `]
})
export class AppComponent {
  title = 'step1-routes';
  quantity = 0;
  setInputValue(val:string){
    this.quantity = Number(val);
  }
}
