import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../login/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;

  constructor(private AuthService: AuthService) { }

  ngOnInit() {
    this.userName = 'Anonymus';
  }

  logIn(): void {
    this.AuthService.logIn(this.AuthService.user);
  }

}
