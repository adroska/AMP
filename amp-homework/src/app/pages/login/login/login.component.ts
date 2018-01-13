import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../common/auth.service';
import { ChangeDetectionStrategy } from '@angular/core/src/change_detection/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  public userName: string;
  public password: string;

  public constructor(private authService: AuthService) { }

  public ngOnInit() {
    this.userName = 'Anonymus';
    this.password = 'Password';
  }

  public logIn(): void {
    this.authService.logIn(this.userName, this.password);
  }

}
