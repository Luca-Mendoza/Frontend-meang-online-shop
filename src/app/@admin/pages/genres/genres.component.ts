import { basicAlert } from '@shared/alerts/toasts';
import { GenresService } from './genres.service';
import { ITableColumns } from '@core/interfaces/table-columns.interface';
import { IResultData } from '@core/interfaces/result-data.interface';
import { GENRES_LIST_QUERY } from '@graphql/operations/query/genre';
import { DocumentNode } from 'graphql';
import { Component, OnInit } from '@angular/core';
import { fromBasicDialog, optionsWithDetails } from '@shared/alerts/alerts';
import { TYPE_ALERT } from '@shared/alerts/values.config';
import { TitleService } from '@admin/core/services/title.service';
import { LABEL } from '@admin/core/constants/title.constants';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss'],
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

  constructor(
    private service: GenresService,
    private titleService: TitleService
  ) {}

  ngOnInit(): void {
    this.titleService.updateTitle(LABEL.GENRES);
    this.context = {};
    this.itemsPage = 5;
    this.resultData = {
      listKey: 'genres',
      definitionKey: 'genres',
    };
    this.include = false;
    this.columns = [
      {
        property: 'id',
        label: '#',
      },
      {
        property: 'name',
        label: 'Nombre del género',
      },
      {
        property: 'slug',
        label: 'Slug',
      },
    ];
  }

  async takeAction($event) {
    // Coger la información para las acciones
    const action = $event[0];
    const genre = $event[1];
    // Añadir valor por defecto en caso que no se cumpla la condición
    const defaultValue =
      genre.name !== undefined && genre.name !== '' ? genre.name : '';
    // si la condición 'defaultValue' se cumple se le asigna al la const html
    const html = `<input id="name" value="${defaultValue}" class="swal2-input" required>`;

    // Teniendo en cuenta el caso, ejecutar una acción
    switch (action) {
      case 'add':
        // Añadir el item
        this.addForm(html);
        break;
      case 'edit':
        // Editar el item
        this.updateForm(html, genre);
        break;
      case 'info':
        // Informacion sobre el item
        const result = await optionsWithDetails(
          'Detalles',
          `${genre.name} (${genre.slug})`,
          400,
          '<i class="fas fa-edit"></i> Editar', // true
          '<i class="fas fa-lock"></i> Block'
        ); // false
        if (result) {
          this.updateForm(html, genre);
        } else if (result === false) {
          this.blockForm(genre);
        }
        break;
      case 'block':
        // Bloquear el item
        this.blockForm(genre);
        break;
      default:
        break;
    }
  }

  // ================ Funciones 'Añadir', 'Bloquear', 'Informacion' ===================== //
  // tslint:disable-next-line:typedef
  private async addForm(html: string) {
    const result = await fromBasicDialog('Añadir género', html, 'name');
    this.addGenre(result);
  }

  // tslint:disable-next-line: typedef
  private addGenre(result) {
    if (result.value) {
      this.service.addGenre(result.value).subscribe((res: any) => {
        if (res.status) {
          basicAlert(TYPE_ALERT.SUCCESS, res.message);
          return;
        }
        basicAlert(TYPE_ALERT.WARNING, res.message);
      });
    }
  }
  // tslint:disable-next-line: typedef
  private updateGenre(id: string, result) {
    if (result.value) {
      this.service.update(id, result.value).subscribe((res: any) => {
        if (res.status) {
          basicAlert(TYPE_ALERT.SUCCESS, res.message);
          return;
        }
        basicAlert(TYPE_ALERT.WARNING, res.message);
      });
    }
  }

  // tslint:disable-next-line:typedef
  private async updateForm(html: string, genre: any) {
    const result = await fromBasicDialog('Modificar género', html, 'name');
    this.updateGenre(genre.id, result);
  }

  private blockGenre(id: string) {
    this.service.block(id).subscribe((res: any) => {
      if (res.status) {
        basicAlert(TYPE_ALERT.SUCCESS, res.message);
        return;
      }
      basicAlert(TYPE_ALERT.WARNING, res.message);
    });
  }

  private async blockForm(genre: any) {
    const result = await optionsWithDetails(
      '¿Bloquear?',
      'Si bloqueas el item seleccionado, no se mostrará en la lista',
      475,
      'No, no bloquear',
      'Si, bloquear'
    );
    if (result === false) {
      // Si el resultado es falso, queremos bloquear
      this.blockGenre(genre.id);
    }
  }
}
