import { IMeData, ISession } from '@core/interfaces/session.interface';
import { map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { LOGIN_QUERY, ME_DATA_QUERY } from '@graphql/operations/query/user';
import { ApiService } from '@graphql/services/api.service';
import { HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiService {

  accessVar = new Subject<IMeData>();
  accessVar$ = this.accessVar.asObservable();
  constructor(apollo: Apollo) {
    super(apollo);
  }


  // tslint:disable-next-line: typedef
  updateSession(newValue: IMeData) {
    this.accessVar.next(newValue);
  }

  // tslint:disable-next-line: typedef
  start() {

    if (this.getSession() !== null) {
      this.getMe().subscribe((result: IMeData) => {
        if (!result.status) {
          this.resetSession();
          return;
        }
        this.updateSession(result);
      });
      console.log('Sesión  iniciada');
      return;
    }
    this.updateSession({
      status: false
    });

    console.log('Sesión no iniciada');

  }

  // Añadimos métodos para consumir la info de la API
  // tslint:disable-next-line:typedef
  login(email: string, password: string) {

    return this.get(LOGIN_QUERY, { email, password, include: false }).pipe(
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
          Authorization: (this.getSession() as ISession).token
        })
      }).pipe(map((result: any) => {
        return result.me;
      }));
  }

  // tslint:disable-next-line: typedef
  setSession(token: string, expiresTimeInHours = 24) {
    const date = new Date();
    date.setHours(date.getHours() + expiresTimeInHours);

    const session: ISession = {
      expiresIn: new Date(date).toISOString(),
      token,
    };
    localStorage.setItem('session', JSON.stringify(session));
  }

  // tslint:disable-next-line: typedef
  getSession(): ISession {
    return JSON.parse(localStorage.getItem('session'));
  }

  // tslint:disable-next-line: typedef
  resetSession() {
    localStorage.removeItem('session');
    this.updateSession({ status: false });

  }
}
