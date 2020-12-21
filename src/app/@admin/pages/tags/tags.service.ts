import { ADD_TAG, BLOCK_TAG, MODIFY_TAG } from './../../../@graphql/operations/mutation/tag';
import { Apollo } from 'apollo-angular';
import { ApiService } from './../../../@graphql/services/api.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class TagsService extends ApiService {

  constructor(apollo: Apollo) {
    super(apollo);
  }

  addTag(name: string) {
    return this.set(
      ADD_TAG,
      {
        genre: name
      }, {}).pipe(map((result: any) => {
        return result.addTag;
      }));
  }

  update(id: string, name: string) {
    return this.set(
      MODIFY_TAG,
      {
        id,
        tag: name
      }, {}).pipe(map((result: any) => {
        return result.updateTag;
      }));
  }

  block(id: string) {
    return this.set(
      BLOCK_TAG,
      {
        id
      }, {}).pipe(map((result: any) => {
        return result.blockTag;
      }));
  }


}
