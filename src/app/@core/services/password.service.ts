import { Apollo } from 'apollo-angular';
import { ApiService } from './../../@graphql/services/api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordService extends ApiService {

  constructor(apollo: Apollo) { 
    super(apollo);
  }

  reset(){}
}
