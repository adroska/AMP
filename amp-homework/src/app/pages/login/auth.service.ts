import { Injectable } from '@angular/core';
import { User } from '../../../app/interfaces/user'

@Injectable()
export class AuthService {

  user : User = {
    username: 'bla',
    password: 'blabla',
    token: 'blablabla'
  };

  constructor() { }

  logIn(userInfo: User): void {
    window.localStorage.setItem('userInfo', JSON.stringify(userInfo));
    window.alert('*** You are logging in. ***');
  }

  logOut(): void {
    window.localStorage.removeItem('userInfo');
    window.alert('*** You are logging out. ***');
  }

  isAuthenticated(): boolean {
    return !!this.getUserInfo();
  }

  getUserInfo(): User {
    return JSON.parse(window.localStorage.getItem('userInfo'));
  }

}
