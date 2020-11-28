import { EventEmitter, Injectable } from '@angular/core';
import { User } from './user/user.model';

@Injectable({providedIn: 'root'})
export class UsersService {

  userListEvent: EventEmitter<User> = new EventEmitter<User>();

  private users: User[] = [
    { id:0, name: "Batman" },
    { id:1, name: "A-Train" },
    { id:2, name: "Homelander" },
  ];

  public getUsers(): { id: number, name: string; }[] {
    return this.users.slice();
  }

  getUserById(id:number): User {
    return this.getUsers()[id];
  }

}