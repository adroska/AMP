import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../common/auth.service';
import { User } from '../../../interfaces/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logIn(): void {
    this.authService.logIn(this.authService.user);
  }

  logOut(): void {
    this.authService.logOut();
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  getUserInfo(): User {
    return this.authService.getUserInfo();
  }
}
