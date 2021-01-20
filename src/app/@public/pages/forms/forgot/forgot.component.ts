import { basicAlert } from '@shared/alerts/toasts';
import { Component, OnInit, ɵConsole } from '@angular/core';
import { EMAIL_PATTERN } from '@core/constants/regex';
import { PasswordService } from '@core/services/password.service';
import { TYPE_ALERT } from '@shared/alerts/values.config';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  emailValue: string;
  pattern = EMAIL_PATTERN;


  constructor(private passwordService: PasswordService) { }

  ngOnInit(): void {
  }

  reset() {
    console.log('reseteando');
    this.passwordService.reset(this.emailValue).subscribe(result => {
      console.log(result);
      if (result.status) {
        basicAlert(TYPE_ALERT.SUCCESS, result.message);
        return;
      }
      basicAlert(TYPE_ALERT.WARNING, result.message);
    });
  }

}
