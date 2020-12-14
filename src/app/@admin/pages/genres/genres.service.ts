import { ADD_GENRE, MODIFY_GENRE } from '@graphql/operations/mutation/genre';
import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { ApiService } from '@graphql/services/api.service';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})

export class GenresService extends ApiService {

  constructor(apollo: Apollo) {
    super(apollo);
  }

  addGenre(name: string) {
    return this.set(
      ADD_GENRE,
      {
        genre: name
      }, {}).pipe(map((result: any) => {
        return result.addGenre;
      }));
  }

  update(id: string, name: string) {
    return this.set(
      MODIFY_GENRE,
      {
        id,
        genre: name
      }, {}).pipe(map((result: any) => {
        return result.updateGenre;
      }));
  }
}
