import { Component, OnInit } from '@angular/core';
import { ILoginForm, IResultLogin } from '@core/interfaces/login.interface';
import { AuthService } from '@core/services/auth.service';

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
  }

  // tslint:disable-next-line:typedef
  init() {
    console.log(this.login);
    this.auth.login(this.login.email, this.login.password).subscribe(
      (result: IResultLogin) => {
        console.log(result);
        if (result.status && result.token !== null){
          console.log('Inicio de sesión correcto');
          return;
        }
        console.log('Inicio de sesión no correcto');
      }
    );

  }
}
