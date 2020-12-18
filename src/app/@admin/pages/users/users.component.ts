import { ITableColumns } from '@core/interfaces/table-columns.interface';
import { IResultData } from '@core/interfaces/result-data.interface';
import { DocumentNode } from 'graphql';
import { Component, OnInit } from '@angular/core';
import { USERS_LIST_QUERY } from '@graphql/operations/query/user';
import { optionsWithDetails, userFromBasicDialog } from '@shared/alerts/alerts';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
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
      definitionKey: 'users',
    };
    this.include = true;
    this.columns = [
      {
        property: 'id',
        label: '#',
      },
      {
        property: 'name',
        label: 'Nombre',
      },
      {
        property: 'lastname',
        label: 'Apellidos',
      },
      {
        property: 'email',
        label: 'Correo electrónico',
      },
      {
        property: 'role',
        label: 'Permisos',
      },
    ];
  }

  private initializeForm(user: any) {
    return `
            <input id="name" value="" placeholder="Usuario" class="swal2-input" required>
            <input id="name" value="" placeholder="Apellido" class="swal2-input" required>
            <input id="name" value="" placeholder="Correo Electronico" class="swal2-input" required>
            <select id="role" class="swal2-input">
              <option value="ADMIN">Administrador</option>
              <option value="CLIENT">Cliente</option>
            </select>
    `;
  }

  // tslint:disable-next-line: typedef
  async takeAction($event) {
    // Coger la información para las acciones
    const action = $event[0];
    const user = $event[1];
    // Añadir valor por defecto en caso que no se cumpla la condición
    const defaultValue =
      user.name !== undefined && user.name !== '' ? user.name : '';
    // si la condición 'defaultValue' se cumple se le asigna al la const html
    // const html = `<input id="name" value="${defaultValue}" class="swal2-input" required>`;

    // Teniendo en cuenta el caso, ejecutar una acción
    const html = this.initializeForm(user);
    switch (action) {
      case 'add':
        // Añadir el item
        this.addForm(html);
        break;
      case 'edit':
        // Editar el item
        //  this.updateForm(html, user);
        break;
      case 'info':
        // Informacion sobre el item
        const result = await optionsWithDetails(
          'Detalles',
          `${user.name} ${user.lastname} </br>
          <i class="fas fa-user-tag"></i>&nbsp;${user.role} </br>
          <i class="far fa-calendar-alt"></i>&nbsp;${user.birthday} </br>
          <i class="fas fa-envelope-open-text"></i>&nbsp;${user.email} </br>`,
          400,
          '<i class="fas fa-edit"></i> Editar', // true
          '<i class="fas fa-lock"></i> Block'
        ); // false
        if (result) {
          // this.updateForm(html, genre);
        } else if (result === false) {
          //   this.blockForm(genre);
        }
        break;
      case 'block':
        // Bloquear el item
        // this.blockForm(genre);
        break;
      default:
        break;
    }
  }

  // ================ Funciones 'Añadir', 'Bloquear', 'Informacion' ===================== //
  // tslint:disable-next-line:typedef
  private async addForm(html: string) {
    const result = await userFromBasicDialog('Añadir usuario', html, 'name');
    // this.addGenre(result);
  }

}

