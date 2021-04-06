import { TYPE_ALERT } from '@shared/alerts/values.config';
import { Component } from '@angular/core';
import { ILoginForm, IResultLogin } from '@core/interfaces/login.interface';
import { AuthService } from '@core/services/auth.service';
import { basicAlert } from '@shared/alerts/toasts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  login: ILoginForm = {
    email: '',
    password: '',
  };

  constructor(private auth: AuthService, private router: Router) {}

  // tslint:disable-next-line:typedef
  init() {
    this.auth
      .login(this.login.email, this.login.password)
      .subscribe((result: IResultLogin) => {
        if (result.status) {
          if (result.token !== null) {
            // Guardamos la sesión
            this.auth.setSession(result.token);
            this.auth.updateSession(result);
            if (localStorage.getItem('route_after_login')) {
              this.router.navigate([localStorage.getItem('route_after_login')]);
              localStorage.removeItem('route_after_login');
              return;
            }
            this.router.navigate(['/home']);
            return;
          }
          basicAlert(TYPE_ALERT.WARNING, result.message);
          return;
        }
        basicAlert(TYPE_ALERT.INFO, result.message);
      });
  }
}
