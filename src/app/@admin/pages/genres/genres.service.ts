import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { ApiService } from '../../../@graphql/services/api.service';

@Injectable({
  providedIn: 'root'
})

export class GenresService extends ApiService {

  constructor(apollo: Apollo) {
    super(apollo);
  }

  addGenre(name: string) {
    return this.set();
  }
}
