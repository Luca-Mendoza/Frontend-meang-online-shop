import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PasswordService } from '@core/services/password.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  token: string;
  values: any = {
    passwordTwo: '',
    password: '',
  };

  constructor(private route: ActivatedRoute,private passwordService: PasswordService, private router: Router) {
    this.route.params.subscribe(params => {
      this.token = params.token;
      console.log(this.token);
    });
  }

  ngOnInit(): void {
  }

  reset(){}

}
