import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable()
export class AuthService {

  user : User = {
    username: 'bla',
    password: 'blabla',
    token: 'blablabla'
  };

  public constructor() { }

  public logIn(userInfo: User): void {
    window.localStorage.setItem('userInfo', JSON.stringify(userInfo));
    window.alert('*** You are logging in. ***');
  }

  public logOut(): void {
    window.localStorage.removeItem('userInfo');
    window.alert('*** You are logging out. ***');
  }

  public isAuthenticated(): boolean {
    return !!this.getUserInfo();
  }

  public getUserInfo(): User {
    return JSON.parse(window.localStorage.getItem('userInfo'));
  }

}
