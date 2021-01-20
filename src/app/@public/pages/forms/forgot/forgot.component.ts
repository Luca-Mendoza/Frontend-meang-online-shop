import { Component, OnInit, ɵConsole } from '@angular/core';
import { EMAIL_PATTERN } from '@core/constants/regex';
import { PasswordService } from '@core/services/password.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  emailValue: string;
  pattern =  EMAIL_PATTERN;

  constructor( private passwordService: PasswordService) { }

  ngOnInit(): void {
  }

  reset(){
    console.log('reseteando');
    this.passwordService.reset(this.emailValue).subscribe(result => {
      console.log(result);
    });
  }

}
