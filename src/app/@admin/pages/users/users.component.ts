import { IResultData } from '@core/interfaces/result-data.interface';
import { DocumentNode } from 'graphql';
import { Component, OnInit } from '@angular/core';
import { USERS_LIST_QUERY } from '@graphql/operations/query/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  // La consulta
  query: DocumentNode = USERS_LIST_QUERY;
  // Información del contexto
  context: object;
  // Los Items por pagína
  itemsPage: number;
  // Resultado de la data
  resultData: IResultData;
  // lo que es el include
  include: boolean;

  ngOnInit(): void {
    this.context = {};
    this.itemsPage = 1;
    this.resultData =  {
      listKey: 'users',
      definitionKey: 'users'
    };
    this.include = true;
  }
}
