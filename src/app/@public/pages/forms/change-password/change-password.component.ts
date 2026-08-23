import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PasswordService } from '@core/services/password.service';
import { basicAlert } from '@shared/alerts/toasts';
import { TYPE_ALERT } from '@shared/alerts/values.config';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  showPassword = false;
  showPasswordTwo = false;

  token: string;
  values: any = {
    passwordTwo: '',
    password: '',
  };

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  togglePasswordTwoVisibility() {
    this.showPasswordTwo = !this.showPasswordTwo;
  }

  constructor(private route: ActivatedRoute, private passwordService: PasswordService, private router: Router) {
    this.route.params.subscribe(params => {
      this.token = params.token;
    });
  }

  ngOnInit(): void {
  }

  reset() {
    if (this.values.password !== this.values.passwordTwo) {
      basicAlert(TYPE_ALERT.WARNING, 'Las contraseña no coinciden y no es válido para cambiar la contraseña. Procura asegurarte que las contraseña son iguales');
      return;
    }
    // Todo validado, vamos a enviarlo a la API de Graphql
    // service => cambio Password
    this.passwordService.change(this.token, this.values.password).subscribe(
      result => {
        if (result.status) {
          basicAlert(TYPE_ALERT.SUCCESS, result.mmessage);
          // redireccionar al login
          this.router.navigate(['login']);
          return;
        }
        basicAlert(TYPE_ALERT.WARNING, result.message);
      }
    );
  }

}
