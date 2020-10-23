import { map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { LOGIN_QUERY, ME_DATA_QUERY } from '@graphql/operations/query/user';
import { ApiService } from '@graphql/services/api.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiService {

  constructor(apollo: Apollo) {
    super(apollo);
  }
  // Añadimos métodos para consumir la info de la API
  // tslint:disable-next-line:typedef
  login(email: string, password: string) {

    return this.get(LOGIN_QUERY, { email, password }).pipe(
      map((result: any) => {
        return result.login;
      })
    );
  }

  // tslint:disable-next-line:typedef
  getMe() {
    return this.get(ME_DATA_QUERY, {
      include: false
    },
      {
        headers: new HttpHeaders({
          Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVmN2JhZTU2ZDI5MjBmMWY4Y2UzNzJlYiIsIm5hbWUiOiJMdWNhIiwibGFzdG5hbWUiOiJNZW5kb3phIiwiZW1haWwiOiJtZW5kb3phbHVjYTVAb3V0bG9vay5jb20iLCJyb2xlIjoiQURNSU4iLCJpZCI6MX0sImlhdCI6MTYwMjYzNjI2NSwiZXhwIjoxNjAyNzIyNjY1fQ.BVlSBxHAe9L-VoeQ5Zlacv-shnL01TScerx4Y0DYpoA'
        })
      }).pipe(map((result: any) => {
        return result.me;
      }));
  }

  setSession(token: string, expiresTimeInHours = 24){
    const date = new Date();

    console.log('Fecha y hora', date.toISOString());
    date.setHours(date.getHours() + expiresTimeInHours);

    const session = {
      expiresIn: new Date(date).toISOString(),
      token,
    };
    console.log(session);
    localStorage.setItem('session', JSON.stringify(session));
  }
}
