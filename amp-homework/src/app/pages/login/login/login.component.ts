import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../../../common/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  public userName: string;
  public password: string;

  public constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  public ngOnInit() {
    this.userName = 'Warner';
    this.password = 'ea';
  }

  public logIn(): void {
    this.authService.logIn(this.userName, this.password)
      .subscribe((response) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['courses']);
      });
  }

}
