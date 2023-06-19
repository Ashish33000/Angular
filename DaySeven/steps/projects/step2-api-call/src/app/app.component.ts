import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <hr>
    <table>
    <thead>
    <tr>
    <th>Sl#</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Avtar</th>
    <th>Email</th>
    </tr>
    </thead>
    <tbody>
    <tr *ngFor="let user of users">
    <th>{{user.id}}<th>
    <td>{{user.first_name}} </td>
    <td>{{user.last_name}}</td>
    <td>{{user.avatar}}</td>
    <td>{{user.email}}</td>
    </tr>
    </tbody>
    </table>

  `,
  styles: []
})
export class AppComponent {
  title = 'Ajax In Angular';
  users:any=[]
}
