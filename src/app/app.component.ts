import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-routing-app';

  constructor(
    private authService:AuthService
  ) {}

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }
  
}
