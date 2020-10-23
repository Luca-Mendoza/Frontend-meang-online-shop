import { TYPE_ALERT } from '@shared/alerts/values.config';
import { Component, OnInit } from '@angular/core';
import { ILoginForm, IResultLogin } from '@core/interfaces/login.interface';
import { AuthService } from '@core/services/auth.service';
import { basicAlert } from '@shared/alerts/toasts';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: ILoginForm = {
    email: '',
    password: ''
  };

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.getMe().subscribe( result => console.log(result));
  }

  // tslint:disable-next-line:typedef
  init() {
    console.log(this.login);
    this.auth.login(this.login.email, this.login.password).subscribe(
      (result: IResultLogin) => {
        console.log(result);
        if (result.status) {
          if (result.token !== null) {
            // Guardamos la sesión
            basicAlert(TYPE_ALERT.SUCCESS, result.message);
            this.auth.setSession(result.message);
            return;
          }
          basicAlert(TYPE_ALERT.WARNING, result.message);
          return;
        }
        basicAlert(TYPE_ALERT.INFO, result.message);
        console.log('Inicio de sesión no correcto');
      }
    );
  }

}
