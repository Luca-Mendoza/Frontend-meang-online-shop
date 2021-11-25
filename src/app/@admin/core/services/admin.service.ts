import { Injectable } from '@angular/core';

import { ApiService } from './../../../@graphql/services/api.service';

import { Apollo } from 'apollo-angular';
import { DASHBOARD_STARS_ELEMENTS } from '../../../@graphql/operations/query/dashboard';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root',
})
export class AdminService extends ApiService {
  constructor(apollo: Apollo) {
    super(apollo);
  }

  getStats() {
    return this.get(DASHBOARD_STARS_ELEMENTS).pipe(
      map((result: any) => {
        return {
          users: result.users,
          platforms: result.platforms,
          genres: result.genres,
          tangs: result.tangs,
          shopProducts: result.shopProducts,
          products: result.products,
        };
      })
    );
  }
}
