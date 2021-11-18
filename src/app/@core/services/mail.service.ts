import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { SEND_EMAIL_ACTION } from '../../@graphql/operations/mutation/mail';
import { IMail } from '../interfaces/mail.interface';
import { ApiService } from './../../@graphql/services/api.service';
@Injectable({
  providedIn: 'root',
})
export class MailService extends ApiService {
  constructor(apollo: Apollo) {
    super(apollo);
  }

  send(mail: IMail) {
    return this.set(SEND_EMAIL_ACTION, { mail }).pipe(
      map((result: any) => result.sendEmail)
    );
  }
}
