import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from './user/user.model';

import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

  users: User[] = null;

  constructor(
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.users = this.usersService.getUsers();
  }

  onGoHomePage() {
    this.router.navigate(['/']);
  }

  onReloadPage() {
    // this.router.navigate(['users'], {relativeTo: this.route});
  }
  
}