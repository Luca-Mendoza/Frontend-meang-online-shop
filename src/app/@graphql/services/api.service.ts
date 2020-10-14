import { LOGIN_QUERY, USERS_LIST_QUERY, ME_DATA_QUERY } from '@graphql/operations/query/user';
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
      },
      fetchPolicy: 'network-only'
    }).valueChanges.pipe(map((result) => {
      return result.data;
    }));
  }

  getUsers() {
    return this.apollo.watchQuery(
      {
        query: USERS_LIST_QUERY,
        variables: {
          include: true
        },
        fetchPolicy: 'network-only'
      }
    ).valueChanges.pipe(map((result) => {
      console.log(result); // { "users": {status message users: []} }
    }));
  }

  getMe() {
    return this.apollo.watchQuery(
      {
        query: ME_DATA_QUERY,
        variables: {
          include: false
        },
        context: {
          headers: {
            Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVmN2JhZTU2ZDI5MjBmMWY4Y2UzNzJlYiIsIm5hbWUiOiJMdWNhIiwibGFzdG5hbWUiOiJNZW5kb3phIiwiZW1haWwiOiJtZW5kb3phbHVjYTVAb3V0bG9vay5jb20iLCJyb2xlIjoiQURNSU4iLCJpZCI6MX0sImlhdCI6MTYwMjYzNjI2NSwiZXhwIjoxNjAyNzIyNjY1fQ.BVlSBxHAe9L-VoeQ5Zlacv-shnL01TScerx4Y0DYpoA'
          }
        },
        fetchPolicy: 'network-only'
      }
    ).valueChanges.pipe(map(result => {
      return result.data;
    }));
  }

  register() { }

}
