import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <hr>
    <table>
    <thead>
    <tr>
    <th>Sl#</th>
    <th>First_Name</th>
    <th>Last_Name</th>
    <th>Avtar</th>
    <th>Email</th>
    </tr>
    </thead>
    <tbody>
    <tr *ngFor="let user of usersdata.data">
    <td>{{user.id}}</td>
    <td>{{user.first_name}}</td>
    <td>{{user.last_name}}</td>
    <td>
    <img [src]="user.avatar" [alt]="user.first_name" width="40px">
    </td>
    <td>{{user.email}}</td>
    </tr>
    </tbody>
    </table>

  `,
  styles: []
})
export class AppComponent {
  title = 'Ajax In Angular';
  usersdata:any={}
  constructor(private ud:UserService){

  }
  ngOnInit(){
    this.ud.getUserData().subscribe(res=>this.usersdata=res)
  }
}
