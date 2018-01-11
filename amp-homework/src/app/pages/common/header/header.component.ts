import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../common/auth.service';
import { User } from '../../../interfaces/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  public constructor(private authService: AuthService) { }

  public ngOnInit() {
  }

  public logIn(): void {
    this.authService.logIn(this.authService.user);
  }

  public logOut(): void {
    this.authService.logOut();
  }

  public isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  public getUserInfo(): User {
    return this.authService.getUserInfo();
  }
}
