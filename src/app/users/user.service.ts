import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../shared/user';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/retry';

@Injectable()
export class UserService {
  private apiUrl: string;
  private users: User[];
  public onUsersUpdated: Subject<User[]>;
  constructor(private http: HttpClient) {
    this.apiUrl = `${environment.apiUrl}/users`;
    this.onUsersUpdated = new Subject<User[]>();
  }

  getAll() {
    this.http
      .get<User[]>(this.apiUrl)
      .retry(3)
      .subscribe(
        users => {
          this.users = users;
          this.onUsersUpdated.next(users.slice());
        },
        error => {
          console.log(error);
          this.onUsersUpdated.next([]);
        }
      );
  }

  create(user: User) {
    this.http.post<number>(this.apiUrl, user).subscribe(id => {
      user.id = id;
      this.users.push(user);
      this.onUsersUpdated.next(this.users.slice());
    });
  }

  update(id: number, data: any) {
    this.http.put<void>(`${this.apiUrl}/${id}`, data).subscribe(() => {
      var user = this.users.find(u => u.id === id);
      Object.assign(user, data);
    });
  }

  delete(id: number) {
    this.http.delete<void>(`${this.apiUrl}/${id}`).subscribe(() => {
      var i = this.users.findIndex(u => u.id === id);
      this.users.splice(i, 1);
      this.onUsersUpdated.next(this.users.slice());
    });
  }
}
