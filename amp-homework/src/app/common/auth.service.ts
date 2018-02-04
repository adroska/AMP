import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthService {

  public constructor(
      private router: Router,
      private http: Http
    ) { }

  public logIn(login: string, password: string): Observable<User> {
    return this.http
      .post('http://localhost:3004/auth/login', {
          login,
          password
      })
      .map((response) => response.json());
  }

  public logOut(): void {
    window.localStorage.removeItem('token');
     this.router.navigate(['login']);
  }

  public isAuthenticated(): boolean {
    return !!this.getUserInfo();
  }

  public getUserInfo(): string {
    return window.localStorage.getItem('token');
  }

}
