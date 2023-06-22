import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

    <div >
      <h1>
        Directibves In Angular
      </h1>

    </div>
    <h2>*ngFor directive</h2>
    <div>
    <div *ngFor="let hero of avengers; index as idx; first as fst; last as lst; odd as od; even as ev" >

    {{idx+1}} ~
    <span *ngIf="fst"> First Avenger: </span>
    <span *ngIf="lst"> Last Avenger: </span>
    <span *ngIf="!fst && !lst"> In Between Avenger: </span>
    <span *ngIf="od"> Odd Avenger: </span>
    <span *ngIf="ev"> Even Avenger: </span>
    {{hero}}</div>
    </div>
    <ng-template ngFor let-hero [ngForOf]="avengers">
    {{hero}}
    </ng-template>
    <hr>
    <h2>*ngSwitch directive</h2>
    <input #rng type="range" min="0" max="5" [value]="rating" (change)="rating=rng.value">{{rating}}
    <div [ngSwitch]="rating">
    <h3 *ngSwitchCase="1" class="rating">*</h3>
    <h3 *ngSwitchCase="2" class="rating">**</h3>
    <h3 *ngSwitchCase="3" class="rating">***</h3>
    <h3 *ngSwitchCase="4" class="rating">****</h3>
    <h3 *ngSwitchCase="5" class="rating">*****</h3>
    <h3 *ngSwitchDefault class="rating">not Rated</h3>
    </div>
    <hr>
    <h2>ngNonBindable directive</h2>
    <h3 ngNonBindable>{{Hello masai}}</h3>
    <hr>
    <h2>ngStyle directive</h2>
    <div [style.backgroundColor]="bgcol1">
    Lorem msnsj wmdnjwdhk mndkwhd qndiqhdi kjdiqjdk kqjdjd  jdj niqdhiqjdjdqkdjjbdwdq
    </div>
    <div [ngStyle]="{'background-color':bgcol2,'color':'darkblue'}">
    Lorem msnsj wmdnjwdhk mndkwhd qndiqhdi kjdiqjdk kqjdjd  jdj niqdhiqjdjdqkdjjbdwdq
    </div>

    <div [ngStyle]="{'background-color':rating < 3 ? 'grey' : 'darkorange'}">
    Lorem msnsj wmdnjwdhk mndkwhd qndiqhdi kjdiqjdk kqjdjd  jdj niqdhiqjdjdqkdjjbdwdq
    </div>

    <hr>
    <h2>ngClass directive</h2>
    <div [ngClass]="{redbox :rating > 3,bluebox : rating > 4}">
    Lorem msnsj wmdnjwdhk mndkwhd qndiqhdi kjdiqjdk kqjdjd  jdj niqdhiqjdjdqkdjjbdwdq
    </div>

    <h2></h2>

  `,
  styles: [`
  .rating{
    margin: 0px;
    font-family: arial;
    color: goldenrod;
  }
  .redbox{
    width: 300px;
    height:200px;
    background-color:red;
    text-align:10px;
    padding:10px;
    margin:10px;
  }
  .bluebox{
    width: 300px;
    height:200px;
    background-color:blue;
    text-align:10px;
    padding:10px;
    margin:10px;
  }
  `]
})
export class AppComponent {
  title = 'step1-directives';
  bgcol1="yellow"
  bgcol2="cyan"
  styleprop="width:400 px;  padding:10px; margin:auto; font-family:ariel; text-align:justify; background-color:silver; border:1px solid red"
  avengers =["Ironman","spiderman","hulk","Hanuman","dr Stranger","thor","Captain America","black widow","Hawk eye","Groot","Antman"]
  rating:any=2;

}
