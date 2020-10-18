import { Component, OnInit } from '@angular/core';
import { ILoginForm } from '@core/interfaces/login.interface';
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

  init() {
    console.log(this.login);

  }
}
