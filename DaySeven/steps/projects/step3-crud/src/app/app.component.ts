import { Component } from '@angular/core';
import { MasaiUserService } from './masai.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
    <h1>Angular CRUD APP</h1>
    <hr>
    <div *ngIf="show">
    <h2>Add new User</h2>
    <div class="mb-3">
  <label for="username" class="form-label">User Name</label>
  <input [(ngModel)]="newuser.username" class="form-control" id="username" >
   </div>
   <div class="mb-3">
   <label for="useremail" class="form-label">User Email</label>
   <input [(ngModel)]="newuser.useremail" class="form-control" id="useremail" placeholder="name@example.com">
    </div>
    <div class="mb-3">
    <label for="usercity" class="form-label">User City</label>
    <input [(ngModel)]="newuser.city" class="form-control" id="usercity" >
     </div>
     <div class="col-auto">
    <button (click)="addUserHandler()" class="btn btn-primary mb-3">Add New User</button>
  </div>
    </div>
    <hr>
    <div *ngIf="show">
    <h2>Edit User</h2>
    <div class="mb-3">
  <label for="e_userid" class="form-label">Edit Id</label>
  <input [(ngModel)]="edituser.id" class="form-control" id="e_userid" >
   </div>
    <div class="mb-3">
  <label for="e_username" class="form-label">Edit User Name</label>
  <input [(ngModel)]="edituser.username" class="form-control" id="e_username" >
   </div>
   <div class="mb-3">
   <label for="e_useremail" class="form-label">Edit Email</label>
   <input [(ngModel)]="edituser.useremail" class="form-control" id="e_useremail" placeholder="name@example.com">
    </div>
    <div class="mb-3">
    <label for="e_usercity" class="form-label">Edit City</label>
    <input [(ngModel)]="edituser.city" class="form-control" id="e_usercity" >
     </div>
     <div class="col-auto">
    <button (click)="updateUserHandler()" class="btn btn-primary mb-3">Update New User</button>
  </div>

    <hr>


    <table class="table table-striped table-hover">
    <thead>
    <tr>
    <th>sl #</th>
    <th> User name</th>
    <th>User Email</th>
    <th>User City</th>
    <th>Edit</th>
    <th>Delete</th>
    </tr>
    </thead>
    <tbody>
    <tr *ngFor="let user of userlist">
    <td>{{user.id}}</td>
    <td> {{user.username}}</td>
    <td>{{user.useremail}}</td>
    <td>{{user.city}}</td>
    <td> <button  (click)="editSelectedUser(user.id)" class="btn btn-warning">Edit UserInfo</button></td>
    <td> <button  (click)="deleteSelectedUser(user.id)" class="btn btn-danger">Delete User</button></td>
    </tr>
    </tbody>
    </table>
    </div>

  `,
  styles: []
})
export class AppComponent {
  title = 'step3-crud';
  show=true;
  newuser:any={
    username:"",
    useremail:"",
    city:""
  }
  edituser:any={
    id:"",
        username:"",
        useremail:"",
        city:""
  }
  userlist:any=[];
  constructor(private us:MasaiUserService){

  }
  refresh(){
    this.us.getAllUser().subscribe(res=>this.userlist=res)
  }
  ngOnInit(){
   this.refresh();
  }
  addUserHandler(){
    this.us.addUser(this.newuser).subscribe(res=>{
      this.refresh();
      this. newuser={
        "username":"",
        "useremail":"",
        "city":""
      }
    });
  }
  editSelectedUser(uid:number){
   this.us.getUserToUpdate(uid).subscribe(res=>this.edituser=res);
  }
  deleteSelectedUser(uid:number){
    this.us.deleteUser(uid).subscribe(res=>{
      this.refresh();
    })
  }
  updateUserHandler(){
    this.us.updateUser(this.edituser).subscribe(res=>{
      this.refresh();
      this.edituser={
        id:"",
        username:"",
        useremail:"",
        city:""
      }
      this.show=!this.show;
    })
  }
}
