import { Injectable } from '@angular/core';
import { User } from '../../../app/interfaces/user'

@Injectable()
export class AuthService {

  constructor() { }

  logIn(userInfo: User): void {
    window.localStorage.setItem('userInfo', JSON.stringify(userInfo));
    window.alert('*** You are logged in. ***');
  }

  logOut(): void {
    window.localStorage.removeItem('userInfo');
    window.alert('*** You are logged out. ***');
  }

  isAuthenticated(): boolean {
    var userInfo: User = this.getUserInfo();
    return !!userInfo;
  }

  getUserInfo(): User {
    var userInfo: User = JSON.parse(window.localStorage.getItem('userInfo'));
    return userInfo;
  }

}
