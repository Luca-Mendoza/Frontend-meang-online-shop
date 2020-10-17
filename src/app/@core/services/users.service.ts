import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { USERS_LIST_QUERY } from '@graphql/operations/query/user';
import { ApiService } from '@graphql/services/api.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends ApiService{

  constructor( apollo: Apollo) {
    super(apollo);
   }


    // tslint:disable-next-line:typedef
    getUsers() {
      return this.get( USERS_LIST_QUERY, {
            include: true
          }).pipe(map((result: any) => {
        console.log(result); // { "users": {status message users: []} }
        return result.users;
      }));
    }
}
