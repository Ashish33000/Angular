import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-builder',
  template: `
  <div>
 <h2>Reactive Builder Form</h2>
  <div [formGroup]="userForm"  action="">
  <div class="mb3">
  <label for="username" class="form-label">User Name</label>
   <input formControlName="username" type="text" id="username" class="form-control" >
   <div *ngIf="userForm.get('username').invalid && userForm.get('username').touched" class="form=text">User Name is Invalid</div>
  </div>
  <div class="mb3">
  <label for="userage" class="form-label">User Age</label>
   <input formControlName="userage" type="text" id="userage"  class="form-control" >
   <div  *ngIf="userForm.get('userage').invalid && userForm.get('userage').touched" class="form=text">User Age is Invalid</div>
  </div>
  <div class="mb3">
  <label for="userPhone" class="form-label">User Phone</label>
   <input formControlName="userphone" type="text" id="userphone" class="form-control" >
   <div  *ngIf="userForm.get('userphone').invalid && userForm.get('userphone').touched" class="form=text">User Phone is Invalid</div>
  </div>
  <div class="col-auto">
   <button type="submit" class="btn btn-primary mb-3">Submit</button>
 </div>
</div>
 <ul>
   <li>User Name: {{userForm.get("username")?.value}}</li>
   <li>User Age: {{userForm.get("userage")?.value}}</li>
   <li>User Phone: {{userForm.get("userphone")?.value}}</li>
   </ul>
   <ul>
   <li *ngIf="userForm.get('username').touched" >User Name: Touched</li>
   <li *ngIf="userForm.get('username').untouched" >User Name: Untouched</li>
   <li *ngIf="userForm.get('username').pristine" >User Name: Pristine</li>
   <li *ngIf="userForm.get('username').valid" >User Name: Valid</li>
   <li *ngIf="userForm.get('username').invalid" >User Name: invalid</li>
   </ul>
   <ul>
   <li *ngIf="userForm.get('userage').touched" >User Age: Touched</li>
   <li *ngIf="userForm.get('userage').untouched" >User Age: Untouched</li>
   <li *ngIf="userForm.get('userage').pristine" >User Age: Pristine</li>
   <li *ngIf="userForm.get('userage').valid" >User Age: Valid</li>
   <li *ngIf="userForm.get('userage').invalid" >User Age: invalid</li>
   </ul>
   <ul>
   <li *ngIf="userForm.get('userphone').touched" >User Phone: Touched</li>
   <li *ngIf="userForm.get('userphone').untouched" >User Phone: Untouched</li>
   <li *ngIf="userForm.get('userphone').pristine" >User Phone: Pristine</li>
   <li *ngIf="userForm.get('userphone').valid" >User Phone: Valid</li>
   <li *ngIf="userForm.get('userphone').invalid" >User Phone: invalid</li>
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
export class ReactiveBuilderComponent {
  userForm:any
  constructor(){

  }
  ngOnInit(){
    this.userForm=new FormGroup({
      username:new FormControl(null, {validators: Validators.required}),
      userage:new FormControl(null, {validators: [Validators.required, Validators.min(18),Validators.max(19)]}),
      userphone:new FormControl(null, {validators: [Validators.required, Validators.pattern("[0-9]{3} [0-9]{4}-[0-9]{4}")]})
    })
  }
}
