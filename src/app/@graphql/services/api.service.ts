import { LOGIN_QUERY } from '@graphql/operations/query/user';
import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private apollo: Apollo) { }

  // Añadimos métodos para consumir la info de la API
  // tslint:disable-next-line:typedef
  login(email: string, password: string) {
    return this.apollo.watchQuery({
      query: LOGIN_QUERY,
      variables: {
        email,
        password
      }
    }).valueChanges.pipe(map((result) => {
      return result.data;
    }));
  }

  getUsers() { }

  getMe() { }

  register() { }

}
