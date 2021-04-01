import { ACTIVE_FILTERS } from '@core/constants/filter';
import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { IProduct } from '@mugan86/ng-shop-ui/lib/interfaces/product.interface';
import { map } from 'rxjs/internal/operators/map';

import { ApiService } from '@graphql/services/api.service';
import {
  SHOP_LAST_UNITS_OFFERS,
  SHOP_PRODUCT_BY_PLATFORM,
  SHOP_PRODUCT_DETAILS,
  SHOP_PRODUCT_RANDOM_ITEMS,
} from '@graphql/operations/query/shop-product';
import { HOME_PAGE } from '@graphql/operations/query/home-page';
import { DETAILS_PAGE } from '@graphql/operations/query/details-page';

@Injectable({
  providedIn: 'root',
})
export class ProductsService extends ApiService {
  constructor(apollo: Apollo) {
    super(apollo);
  }
  getHomePage() {
    return this.get(HOME_PAGE, {
      showPlatform: true,
    }).pipe(
      map((result: any) => {
        console.log('Home page', result);
        return {
          carousel: result.carousel,
          pc: this.manageInfo(result.pc.shopProducts, false),
          ps4: this.manageInfo(result.ps4.shopProducts, false),
          topPrice35: this.manageInfo(result.topPrice35.shopProducts, true),
        };
      })
    );
  }
  shopProductsPlatforms(
    page: number = 1,
    itemsPage: number = 10,
    active: ACTIVE_FILTERS = ACTIVE_FILTERS.ACTIVE,
    random: boolean = false,
    platform: Array<string>,
    showInfo: boolean = false,
    showPlatform: boolean = false
  ) {
    return this.get(SHOP_PRODUCT_BY_PLATFORM, {
      page,
      itemsPage,
      active,
      random,
      platform,
      showInfo,
      showPlatform,
    }).pipe(
      map((result: any) => {
        const data = result.shopProductsPlatforms;
        return {
          info: data.info,
          result: this.manageInfo(data.shopProducts),
        };
      })
    );
  }

  getByLastUnitsOffers(
    page: number = 1,
    itemsPage: number = 10,
    active: ACTIVE_FILTERS = ACTIVE_FILTERS.ACTIVE,
    random: boolean = false,
    topPrice: number = -1,
    lastUnits: number = -1,
    showInfo: boolean = false,
    showPlatform: boolean = false
  ) {
    return this.get(SHOP_LAST_UNITS_OFFERS, {
      page,
      itemsPage,
      active,
      random,
      topPrice,
      lastUnits,
      showInfo,
      showPlatform,
    }).pipe(
      map((result: any) => {
        const data = result.shopProductsOffersLast;
        return {
          info: data.info,
          result: this.manageInfo(data.shopProducts),
        };
      })
    );
  }

  getDetailsProduct(id: number) {
    return this.get(DETAILS_PAGE, { id }, {}, false).pipe(
      map((result: any) => {
        const details = result.details;
        const randomItems = result.randomItems;
        return {
          product: this.setInObject(details.shopProduct, true),
          screens: details.shopProduct.product.screenshoot,
          relational: details.shopProduct.relationalProducts,
          random: this.manageInfo(randomItems.shopProducts, true),
        };
      })
    );
  }

  getRandomItems() {
    return this.get(SHOP_PRODUCT_RANDOM_ITEMS).pipe(
      map((result: any) => {
        console.log(result.randomItems.shopProducts);
        const data = result.randomItems.shopProducts;
        return this.manageInfo(data, true);
      })
    );
  }
  // recoremos la lista de producto
  private setInObject(shopObject, showDescription) {
    return {
      id: shopObject.id,
      img: shopObject.product.img,
      name: shopObject.product.name,
      rating: shopObject.product.rating,
      description:
        shopObject.platform && showDescription ? shopObject.platform.name : '',
      qty: 1,
      price: shopObject.price,
      stock: shopObject.stock,
    };
  }

  private manageInfo(listProducto, showDescription = true) {
    const resulList: Array<IProduct> = [];
    listProducto.map((shopObject) => {
      resulList.push(this.setInObject(shopObject, showDescription));
    });
    return resulList;
  }
}
