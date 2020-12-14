import { basicAlert } from '@shared/alerts/toasts';
import { GenresService } from './genres.service';
import { ITableColumns } from '@core/interfaces/table-columns.interface';
import { IResultData } from '@core/interfaces/result-data.interface';
import { GENRES_LIST_QUERY } from '@graphql/operations/query/genre';
import { DocumentNode } from 'graphql';
import { Component, OnInit } from '@angular/core';
import { fromBasicDialog, infoDetailsBasic } from '@shared/alerts/alerts';
import { TYPE_ALERT } from '@shared/alerts/values.config';

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

  constructor(private service: GenresService) { }

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
  async takeAction($event) {
    console.log($event[0], $event[1]);

    const action = $event[0];
    const genre = $event[1];
    console.log(genre);

    if (action === 'edit' || action === 'add') {
      let defaultValue = '';
      if (genre.name !== undefined && genre.name !== '') {
        defaultValue = genre.name;
      }

      const html = `<input id="name" value="${defaultValue}" class="swal2-input" required>`;

      if (action === 'add') {
        const result = await fromBasicDialog('Añadir género', html, 'name');
        console.log(result);
        this.addGenre(result);
        return;
      }
      if (action === 'edit') {
        const result = await fromBasicDialog('Modificar género', html, 'name');
        console.log(result);
        this.updateGenre(genre.id, result);
        return;
      }
    } else {
      if (action === 'info') {
        infoDetailsBasic('Detalles', `${genre.name} (${genre.slug})`, 250);
      }
    }


  }

  // tslint:disable-next-line: typedef
  addGenre(result) {
    if (result.value) {
      this.service.addGenre(result.value).subscribe(
        (res: any) => {
          console.log(res);
          if (res.status) {
            basicAlert(TYPE_ALERT.SUCCESS, res.message);
            return;
          }
          basicAlert(TYPE_ALERT.WARNING, res.message);
        }
      );
    }
  }
  // tslint:disable-next-line: typedef
  updateGenre(id: string, result) {
    console.log(id, result.value);
    if (result.value) {
      this.service.update(id, result.value).subscribe(
        (res: any) => {
          console.log(res);
          if (res.status) {
            basicAlert(TYPE_ALERT.SUCCESS, res.message);
            return;
          }
          basicAlert(TYPE_ALERT.WARNING, res.message);
        }
      );
    }
  }

}
