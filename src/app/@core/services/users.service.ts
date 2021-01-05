import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { USERS_LIST_QUERY } from '@graphql/operations/query/user';
import { ApiService } from '@graphql/services/api.service';
import { map } from 'rxjs/operators';
import { IRegisterForm } from '@core/interfaces/register.interface';
import { REGISTER_USER } from '@graphql/operations/mutation/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends ApiService {

  constructor(apollo: Apollo) {
    super(apollo);
  }


  // tslint:disable-next-line:typedef
  getUsers(page: number = 1, itemsPage: number = 20) {
    return this.get(USERS_LIST_QUERY, {
      include: true,
      itemsPage,
      page
    }).pipe(map((result: any) => {
      console.log(result); // { "users": {status message users: []} }
      return result.users;
    }));
  }

  // tslint:disable-next-line:typedef
  register(user: IRegisterForm) {
    return this.set(REGISTER_USER,
      {
        user,
        include: false
      }).pipe(
      map((result: any) => {
        return result.register;
      })
    );
  }

  active(token: string, birthday: string, password: string){}
}
