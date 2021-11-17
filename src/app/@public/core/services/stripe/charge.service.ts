import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/internal/operators/map';

import { ApiService } from './../../../../@graphql/services/api.service';
import { CREATE_PAY_ORDER } from '../../../../@graphql/operations/mutation/stripe/charge';

import { IPayment } from '../../../../@core/interfaces/stripe/payment.interface';

@Injectable({
  providedIn: 'root',
})
export class ChargeService extends ApiService {
  constructor(apollo: Apollo) {
    super(apollo);
  }

  payOrder(payment: IPayment) {
    return this.set(CREATE_PAY_ORDER, { payment }).pipe(
      map((result: any) => {
        return result.chargeOrder;
      })
    );
  }
}
