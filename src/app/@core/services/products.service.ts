import { map } from 'rxjs/internal/operators/map';
import { SHOP_LAST_UNITS_OFFERS } from '@graphql/operations/query/shop-product';
import { ACTIVE_FILTERS } from '@core/constants/filter';
import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { ApiService } from '../../@graphql/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService extends ApiService {
  constructor(apollo: Apollo) {
    super(apollo);
  }
  getByPlatform() {
    console.log('Plataformas de los juegos');
  }

  getByLastUnitsOffers(
    page: number = 1,
    itemsPage: number = 10,
    active: ACTIVE_FILTERS = ACTIVE_FILTERS.ACTIVE,
    random: boolean = false,
    topPrice: number = -1,
    lastUnits: number = -1
  ) {
    return this.get(SHOP_LAST_UNITS_OFFERS, {
      page,
      itemsPage,
      active,
      random,
      topPrice,
      lastUnits,
    }).pipe(
      map((result: any) => {
        return result.shopProductsOffersLast;
      })
    );
  }
}
