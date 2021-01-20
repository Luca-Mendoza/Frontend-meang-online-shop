import { RESET_PASSWORD } from './../../@graphql/operations/mutation/password';
import { Apollo } from 'apollo-angular';
import { ApiService } from './../../@graphql/services/api.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class PasswordService extends ApiService {

  constructor(apollo: Apollo) { 
    super(apollo);
  }

  reset(email: string){
    return this.set(
      RESET_PASSWORD,
      {
        email
      }
    ).pipe(map((result: any) => {
      return result.resetPassword;
    }));
  }
}
