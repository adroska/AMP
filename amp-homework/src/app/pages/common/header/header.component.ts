import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../login/auth.service';
import { User } from '../../../interfaces/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit { 
  user : User = {
    username: 'bla',
    password: 'blabla',
    token: 'blablabla'
  };

  constructor(private AuthService: AuthService) { }

  ngOnInit() {
  }

  logIn() {
    this.AuthService.logIn(this.user);
  }

  logOut() {
    this.AuthService.logOut();
  }

  isAuthenticated() {
    this.AuthService.isAuthenticated();
  }

  getUserInfo() {
    this.AuthService.getUserInfo();
  }
}
