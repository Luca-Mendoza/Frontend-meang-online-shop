import { IResultData } from '@core/interfaces/result-data.interface';
import { GENRES_LIST_QUERY } from '@graphql/operations/query/genre';
import { DocumentNode } from 'graphql';
import { Component, OnInit } from '@angular/core';

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

  ngOnInit(): void {
    this.context = {};
    this.itemsPage = 10;
    this.resultData =  {
      listKey: 'genres',
      definitionKey: 'genres'
    };
    this.include = false;
  }

}
