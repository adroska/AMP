import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../../../common/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

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

  public ngOnInit() {}

  public logIn(formData: NgForm): void {
    this.authService.logIn(formData.value.username, formData.value.password)
      .subscribe((response) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['courses']);
      });
  }

}
