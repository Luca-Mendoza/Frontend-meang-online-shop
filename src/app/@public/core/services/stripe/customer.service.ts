import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';

import { ApiService } from './../../../../@graphql/services/api.service';
import { CREATE_CUSTOMER_STRIPE } from '../../../../@graphql/operations/mutation/stripe/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService extends ApiService {
  constructor(apollo: Apollo) {
    super(apollo);
  }

  add(name: string, email: string) {
    return this.set(CREATE_CUSTOMER_STRIPE, { name, email }).pipe(
      map((result: any) => {
        return result.createCustomer;
      })
    );
  }
}
