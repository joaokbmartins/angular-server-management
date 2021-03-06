import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  loggedIn = false;

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 800);
      }
    );
    return promise;
  }

  login(): void {
    this.loggedIn = true;
    console.log('User logged in.')
  }
  
  logout(): void {
    this.loggedIn = false;
    console.log('User logged out.')
  }
  
}