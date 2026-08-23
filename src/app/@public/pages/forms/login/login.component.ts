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
  showPassword = false;

  login: ILoginForm = {
    email: '',
    password: '',
  };

  constructor(private auth: AuthService, private router: Router) {}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  // tslint:disable-next-line:typedef
  init() {
    this.auth
      .login(this.login.email, this.login.password)
      .subscribe(
        (result: IResultLogin) => {
          if (result && result.status) {
            if (result.token !== null) {
              // Guardamos la sesión
              this.auth.setSession(result.token);
              this.auth.updateSession(result);
              if (localStorage.getItem('route_after_login')) {
                const target = localStorage.getItem('route_after_login');
                localStorage.removeItem('route_after_login');
                this.router.navigate([target]);
                return;
              }
              this.router.navigate(['/']);
              return;
            }
            basicAlert(TYPE_ALERT.WARNING, result.message || 'Error en las credenciales');
            return;
          }
          basicAlert(TYPE_ALERT.INFO, result ? result.message : 'Credenciales no válidas');
        },
        (error: any) => {
          console.error('Login error:', error);
          const msg = error?.message || 'Error de inicio de sesión. Por favor verifica las credenciales o la conexión con el servidor.';
          basicAlert(TYPE_ALERT.ERROR, msg);
        }
      );
  }
}
