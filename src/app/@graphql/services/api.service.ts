import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private apollo: Apollo) { }

  // Añadimos métodos para consumir la info de la API
  login(email:string, password:string){}

  getUsers(){}

  getMe(){}

  register(){}

}
