import { Component } from '@angular/core';

@Component({
  selector: 'app-template',
  template: `
   <div>
   <h2>Template Driven Form</h2>
   <form action="#" method="get" #uform="ngForm" (submit)="submitHandler($event,uform)">
   <div class="mb3">
   <label for="username" class="form-label">User Name</label>
    <input #uname="ngModel"  [(ngModel)]="userdata.username" required type="text" name="username" id="username" class="form-control" aria-labelledby="passwordHelpBlock">
    <div *ngIf="uname.invalid && uname.touched" class="form-text val">User Name is Invalid</div>
   </div>
   <div class="mb3">
   <label for="userage" class="form-label">User Age</label>
    <input #uage="ngModel" [(ngModel)]="userdata.userage" required type="number" name="userage" id="userage" min="18" max="90" class="form-control" aria-labelledby="passwordHelpBlock">
    <div *ngIf="uage.invalid && uage.touched"  class="form-text val">User Age is Invalid</div>
   </div>
   <div class="mb3">
   <label for="userPhone" class="form-label">User Phone</label>
    <input title="##########" #uphone="ngModel" pattern="[0-9]{10}" [(ngModel)]="userdata.userphone" required type="text" name="userphone" id="userphone" class="form-control" aria-labelledby="passwordHelpBlock">
    <div *ngIf="uphone.invalid && uphone.touched"  class="form-text val">User Phone is Invalid</div>
   </div>
   <div class="col-auto">
    <button type="submit" class="btn btn-primary mb-3">Submit</button>
  </div>
   </form>
   <ul>
   <li>User Name: {{userdata.username}}</li>
   <li>User Age: {{userdata.userage}}</li>
   <li>User Phone: {{userdata.userphone}}</li>
   </ul>
   <ul>
   <li *ngIf="uname.touched" >User Name: Touched</li>
   <li *ngIf="uname.untouched" >User Name: Untouched</li>
   <li *ngIf="uname.pristine" >User Name: Pristine</li>
   <li *ngIf="uname.valid" >User Name: Valid</li>
   <li *ngIf="uname.invalid" >User Name: invalid</li>
   </ul>
   <ul>
   <li *ngIf="uage.touched" >User Age: Touched</li>
   <li *ngIf="uage.untouched" >User Age: Untouched</li>
   <li *ngIf="uage.pristine" >User Age: Pristine</li>
   <li *ngIf="uage.valid" >User Age: Valid</li>
   <li *ngIf="uage.invalid" >User Age: invalid</li>
   </ul>
   <ul>
   <li *ngIf="uphone.touched" >User Phone: Touched</li>
   <li *ngIf="uphone.untouched" >User Phone: Untouched</li>
   <li *ngIf="uphone.pristine" >User Phone: Pristine</li>
   <li *ngIf="uphone.valid" >User Phone: Valid</li>
   <li *ngIf="uphone.invalid" >User Phone: Invalid</li>
   </ul>
   </div>
  `,
  styles: [`
  .val{
    color:crimson;
  }
   input.ng-valid.ng-touched{
    border :2px solid darkseagreen;
   }
   input.ng-invalid.ng-touched{
    border :2px solid crimson;
   }
  `
  ]
})
export class TemplateComponent {
  userdata={
    username:"",
    userage:"",
    userphone:"",

  }

  submitHandler(event:any,userForm:any){
    event.preventDefault()//optional but recom
    if(event.target.userage.value<18){
      alert("You are to Young to Join us")
    }else if(event.target.userage.value>90){
      alert("You are to Old to Join us")
    }else{
      alert("Welcome to Join us our company")
      event.target.submit();
    }
    console.log(userForm.control.username.value);

  }
}
