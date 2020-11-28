import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { UsersService } from '../users.service';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit, OnDestroy {

  user: User = null;

  paramsSubscription: Subscription

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params["id"],
      name: this.usersService.getUsers()[this.route.snapshot.params["id"]].name
    }
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.user = {
          id: params["id"],
          name: this.usersService.getUsers()[params["id"]].name
        }
      }
    );
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

  onDescribe() { 
    console.log(this.route);
  }

}