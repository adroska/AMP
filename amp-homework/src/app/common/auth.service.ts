import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';

@Injectable()
export class AuthService {

  public constructor(
      private router: Router,
    ) { }

  public logIn(username: string,password: string): void {
      if(username === 'Anonymus' && password === 'Password'){
          window.localStorage.setItem('userInfo', JSON.stringify({username,password}));
          this.router.navigate(['courses']);
      }
  }

  public logOut(): void {
    window.localStorage.removeItem('userInfo');
     this.router.navigate(['login']);
  }

  public isAuthenticated(): boolean {
    return !!this.getUserInfo();
  }

  public getUserInfo(): User {
    return JSON.parse(window.localStorage.getItem('userInfo'));
  }

}
