import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng4-users',
  template: `
    <h2>Users</h2>
    <div class="row">
      <div class="col-md-4">
        <ng4-users-filter></ng4-users-filter>
      </div>  
      <div class="col-md-8">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: []
})
export class UsersComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
