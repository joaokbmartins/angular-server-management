import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}
  
  onGoUsersPage() {
    this.router.navigate(['/users']);
  }

  onGoServer(id:number) {
    this.router.navigate(['/servers', 'edit', id], { queryParams: {allowEdit:true}, fragment:'loading'} );
  }

  onGoServersPage() {
    this.router.navigate(['/servers']);
  }
  
}