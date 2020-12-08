import { ITableColumns } from './../../../@core/interfaces/table-columns.interface';
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
  // definimos dato para hacer dinamica la Table
  columns: Array<ITableColumns>;

  ngOnInit(): void {
    this.context = {};
    this.itemsPage = 10;
    this.resultData = {
      listKey: 'users',
      definitionKey: 'users'
    };
    this.include = true;
    this.columns = [
      {
        property: 'id',
        label: '#'
      },
      {
        property: 'name',
        label: 'Nombre'
      },
      {
        property: 'lastname',
        label: 'Apellidos'
      },
      {
        property: 'email',
        label: 'Correo electrónico'
      },
      {
        property: 'role',
        label: 'Permisos'
      },
      {
        property: 'registerDate',
        label: 'Fecha de registro'
      },
      {
        property: 'birthday',
        label: 'Fecha de nacimiento'
      }
    ];
  }
}

