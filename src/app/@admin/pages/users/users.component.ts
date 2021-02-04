import { ITableColumns } from '@core/interfaces/table-columns.interface';
import { IResultData } from '@core/interfaces/result-data.interface';
import { DocumentNode } from 'graphql';
import { Component, OnInit } from '@angular/core';
import { USERS_LIST_QUERY } from '@graphql/operations/query/user';
import { optionsWithDetails, userFormBasicDialog } from '@shared/alerts/alerts';
import { UsarsAdminService } from './usars-admin.service';
import { IRegisterForm } from '../../../@core/interfaces/register.interface';
import { basicAlert } from '@shared/alerts/toasts';
import { TYPE_ALERT } from '@shared/alerts/values.config';
import { ACTIVE_FILTERS } from '@core/constants/filter';

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
  // Informacion de usuarios activos y inactivos
  filterActiveValues = ACTIVE_FILTERS.ACTIVE;
  // lo que es el include
  include: boolean;
  // definimos dato para hacer dinamica la Table
  columns: Array<ITableColumns>;

  constructor(private service: UsarsAdminService) { }

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
      {
        property: 'active',
        label: '¿Activos?',
      },
    ];
  }

  private initializeForm(user: any) {
    // Añadir valor por defecto en caso que no se cumpla la condición
    // si la condición 'defaultValue' se cumple se le asigna al la const html
    const defaultName =
      user.name !== undefined && user.name !== '' ? user.name : '';
    const defaulLastname =
      user.lastname !== undefined && user.lastname !== '' ? user.lastname : '';
    const defaultEmail =
      user.email !== undefined && user.email !== '' ? user.email : '';
    const roles = new Array(2);
    roles[0] =
      user.role !== undefined && user.role !== 'ADMIN' ? 'selected' : '';
    roles[1] =
      user.role !== undefined && user.role !== 'CLIENT' ? 'selected' : '';

    return `
    <input id="name" value="${defaultName}" placeholder="Nombre" class="swal2-input" required>
    <input id="lastname" value="${defaulLastname}" placeholder="Apellido" class="swal2-input" required>
    <input id="email" value="${defaultEmail}" placeholder="Correo Electronico" class="swal2-input" required>
    <select id="role" class="swal2-input">
      <option value="ADMIN" ${roles[0]}>Administrador</option>
      <option value="ADMIN" ${roles[0]}>Cliente</option>
    </select>
`;
  }


  async takeAction($event) {
    // Coger la información para las acciones
    const action = $event[0];
    const user = $event[1];

    // Teniendo en cuenta el caso, ejecutar una acción
    const html = this.initializeForm(user);
    switch (action) {
      case 'add':
        // Añadir el item
        this.addForm(html);
        break;
      case 'edit':
        // Editar el item
        this.updateForm(html, user);
        break;
      case 'info':
        // Informacion sobre el item
        const result = await optionsWithDetails(
          'Detalles',
          `${user.name} ${user.lastname} </br>
          <i class="fas fa-user-tag"></i>&nbsp;${user.role} </br>
          <i class="far fa-calendar-alt"></i>&nbsp;${user.birthday} </br>
          <i class="fas fa-envelope-open-text"></i>&nbsp;${user.email} </br>`,
          (user.active != false) ? 425 : 445,
          '<i class="fas fa-edit"></i> Editar', // true
          (user.active != false) ?
            '<i class="fas fa-lock"></i> Bloquear' :
            '<i class="fas fa-lock-open"></i> Desbloquear'
        ); // false
        if (result) {
          this.updateForm(html, user);
        } else if (result === false) {
          this.unblockForm(user, (user.active !== false) ? false : true);
        }
        break;
      case 'block':
        // Bloquear el item
        this.unblockForm(user, false);
        break;
      case 'unblock':
        // Desbloquear el item
        this.unblockForm(user, true);
        break;
      default:
        break;
    }
  }

  // ================ Funciones 'Añadir', 'Bloquear', 'Informacion' ===================== //
  private async addForm(html: string) {
    const result = await userFormBasicDialog('Añadir usuario', html);
    console.log(result);
    this.addUser(result);
  }

  private addUser(result) {
    if (result.value) {
      const user: IRegisterForm = result.value;
      user.password = '1234';
      user.active = false;
      this.service.register(user).subscribe((res: any) => {
        if (res.status) {
          basicAlert(TYPE_ALERT.SUCCESS, res.message);
          this.service.sendEmailActive(res.user.id, user.email).subscribe(
            resEmail => {
              (resEmail.status) ?
              basicAlert(TYPE_ALERT.SUCCESS, resEmail.message) :
              basicAlert(TYPE_ALERT.WARNING, resEmail.message)
            }
          );
          return;
        }
        basicAlert(TYPE_ALERT.WARNING, res.message);
      });
    }
  }

  private async updateForm(html: string, user: any) {
    const result = await userFormBasicDialog('Modificar usuario', html);
    console.log(result);
    this.updateUser(result, user.id);
  }

  private updateUser(result, id: string) {
    if (result.value) {
      const user = result.value;
      user.id = id;
      console.log(user);
      this.service.update(result.value).subscribe((res: any) => {
        if (res.status) {
          basicAlert(TYPE_ALERT.SUCCESS, res.message);
          return;
        }
        basicAlert(TYPE_ALERT.WARNING, res.message);
      });
    }
  }


  private async unblockForm(user: any, unblock: boolean) {
    const result = (unblock) ?
      await optionsWithDetails(
        '¿Desbloquear?',
        'Si desbloqueas el usuario seleccionado, se mostrara en la lista y podra hacer compras',
        520,
        'No, no desbloquear',
        'Si, desbloquear'
      ) :
      await optionsWithDetails(
        '¿Bloquear?',
        'Si bloqueas el usuario seleccionado, no se mostrará en la lista',
        520,
        'No, no bloquear',
        'Si, bloquear'
      )
    if (result === false) {
      // Si el resultado es falso, queremos bloquear / desbloquear
      // this.blockUser(user.id);
      this.unblockUser(user.id, unblock, true);
    }
  }

  private unblockUser(id: string, unblock: boolean = false, admin: boolean = false) {
    this.service.unblock(id, unblock, admin).subscribe((res: any) => {
      if (res.status) {
        basicAlert(TYPE_ALERT.SUCCESS, res.message);
        return;
      }
      basicAlert(TYPE_ALERT.WARNING, res.message);
    });
  }

}
