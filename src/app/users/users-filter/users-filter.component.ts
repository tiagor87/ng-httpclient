import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../../shared/user';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'ng4-users-filter',
  templateUrl: './users-filter.component.html',
  styles: []
})
export class UsersFilterComponent implements OnInit {
  public users: User[];
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = [];
    this.userService.getAll();
    this.userService.onUsersUpdated.subscribe(users => (this.users = users));
  }
}
