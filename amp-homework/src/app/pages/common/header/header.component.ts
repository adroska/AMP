import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../login/auth.service';
import { User } from '../../../interfaces/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  constructor(private AuthService: AuthService) { }

  ngOnInit() {
  }

  logIn(): void {
    this.AuthService.logIn(this.AuthService.user);
  }

  logOut(): void {
    this.AuthService.logOut();
  }

  isAuthenticated(): boolean {
    return this.AuthService.isAuthenticated();
  }

  getUserInfo(): User {
    return this.AuthService.getUserInfo();
  }
}
