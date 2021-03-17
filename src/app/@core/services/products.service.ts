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
  getByLastUnitsOffers() {
    console.log('últimas unidades y ofertas');
  }
}
