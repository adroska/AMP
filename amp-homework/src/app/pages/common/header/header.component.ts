import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../common/auth.service';
import { User } from '../../../interfaces/user';
import { ChangeDetectionStrategy } from '@angular/core/src/change_detection/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  
  public constructor(
    private authService: AuthService,
  ) { }

  public ngOnInit() {
  }

  public logOut(): void {
    this.authService.logOut();
  }

  public isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  public getUserInfo(): string {
    return this.authService.getUserInfo();
  }
}
