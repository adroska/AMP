import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../common/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;

  public constructor(private authService: AuthService) { }

  public ngOnInit() {
    this.userName = 'Anonymus';
  }

  public logIn(): void {
    this.authService.logIn(this.authService.user);
  }

}
