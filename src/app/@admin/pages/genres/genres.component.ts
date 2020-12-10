import { ITableColumns } from '@core/interfaces/table-columns.interface';
import { IResultData } from '@core/interfaces/result-data.interface';
import { GENRES_LIST_QUERY } from '@graphql/operations/query/genre';
import { DocumentNode } from 'graphql';
import { Component, OnInit } from '@angular/core';
import { fromBasicDialog } from '@shared/alerts/alerts';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {

  // La consulta
  query: DocumentNode = GENRES_LIST_QUERY;
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
      listKey: 'genres',
      definitionKey: 'genres'
    };
    this.include = false;
    this.columns = [
      {
        property: 'id',
        label: '#'
      },
      {
        property: 'name',
        label: 'Nombre del género'
      },
      {
        property: 'slug',
        label: 'Slug'
      }
    ];
  }

  // tslint:disable-next-line: typedef
  takeAction($event): void {
    console.log($event[0], $event[1]);

    const action = $event[0];
    const html = '<input id="name" class="swal2-input">';

    if (action === 'add') {
      fromBasicDialog('Añadir género', html, 'name');
    }
  }

}
