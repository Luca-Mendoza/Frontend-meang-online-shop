import { EMAIL_PATTERN } from '@core/constants/regex';
import Swal from 'sweetalert2';
import { TYPE_ALERT } from './values.config';

// tslint:disable-next-line:typedef
// Aplicando swal.mixin = para reutilizar codigo de la alert
const swalWithBasicOptions = (title: string, html: string) =>
  Swal.mixin({
    title,
    html,
    focusConfirm: false,
    cancelButtonText: 'Cancelar',
    showCancelButton: true,
    customClass: {
      popup: 'custom-gz-swal-popup',
      title: 'custom-gz-swal-title',
      htmlContainer: 'custom-gz-swal-html',
      confirmButton: 'custom-gz-swal-confirm-btn',
      cancelButton: 'custom-gz-swal-cancel-btn',
    },
  });

// tslint:disable-next-line:typedef
export async function fromBasicDialog(
  title: string,
  html: string,
  property: string
) {
  return await swalWithBasicOptions(title, html).fire({
    preConfirm: () => {
      const value = (document.getElementById('name') as HTMLInputElement).value;
      if (value) {
        return value;
      }
      Swal.showValidationMessage(
        'Tiene que añadir un género para poder almacenarlo'
      );
      return;
    },
  });
}

// tslint:disable-next-line:typedef
export async function userFormBasicDialog(title: string, html: string) {
  return await swalWithBasicOptions(title, html).fire({
    preConfirm: () => {
      let error = '';
      const name = (document.getElementById('name') as HTMLInputElement)?.value;
      if (!name) {
        error += 'Nombre es obligatorio<br/>';
      }
      const lastname = (document.getElementById('lastname') as HTMLInputElement)
        ?.value;
      if (!lastname) {
        error += 'Apellido es obligatorio<br/>';
      }
      const email = (document.getElementById('email') as HTMLInputElement)
        ?.value;
      if (!email) {
        error += 'Email es obligatorio<br/>';
      }
      if (!EMAIL_PATTERN.test(email)) {
        error += 'Email no es correcto en su formato';
      }
      const role = (document.getElementById('role') as HTMLInputElement)?.value;
      if (error !== '') {
        Swal.showValidationMessage(error);
        return;
      }
      return {
        name,
        lastname,
        email,
        role,
        birthday: new Date().toISOString(),
      };
    },
  });
}

// tslint:disable-next-line:typedef
export async function optionsWithDetails(
  title: string,
  html: string,
  width: number | string,
  confirmButtonText: string,
  cancelButtonText: string
) {
  return await Swal.fire({
    title,
    html,
    width: `${width}px`,
    showCloseButton: true,
    showCancelButton: true,
    confirmButtonColor: '#ef4444',
    cancelButtonColor: '#4b5563',
    confirmButtonText,
    cancelButtonText,
    customClass: {
      popup: 'custom-gz-swal-popup',
      title: 'custom-gz-swal-title',
      htmlContainer: 'custom-gz-swal-html',
      confirmButton: 'custom-gz-swal-confirm-btn',
      cancelButton: 'custom-gz-swal-cancel-btn',
    },
  }).then((result) => {
    // console.log(result);
    if (result.value) {
      return true;
    } else if (result.dismiss.toString() === 'cancel') {
      return false;
    }
  });
}
export const loadData = (title: string, html: string) => {
  Swal.fire({
    title,
    html,
    showConfirmButton: false,
    allowOutsideClick: false,
    onBeforeOpen: () => {
      Swal.showLoading();
    },
  });
};

export const closeAlert = () => {
  Swal.close();
};

export const infoEventlert = async (
  title: string,
  html: string,
  typeAlert: TYPE_ALERT = TYPE_ALERT.WARNING
) => {
  return await Swal.fire({
    title,
    html,
    icon: typeAlert,
    customClass: {
      popup: 'custom-gz-swal-popup',
      title: 'custom-gz-swal-title',
      htmlContainer: 'custom-gz-swal-html',
      confirmButton: 'custom-gz-swal-confirm-btn',
      cancelButton: 'custom-gz-swal-cancel-btn',
    },
    preConfirm: () => {
      return true;
    },
  });
};

export async function profileEditDialog(user: any) {
  const nameVal = user?.name || '';
  const lastnameVal = user?.lastname || '';
  let birthdayVal = '';
  if (user?.birthday) {
    try {
      birthdayVal = new Date(user.birthday).toISOString().substring(0, 10);
    } catch (e) {
      birthdayVal = user.birthday;
    }
  }

  const html = `
    <div class="text-left py-2">
      <div class="form-group mb-3">
        <label class="small text-muted font-weight-bold mb-1">Nombre</label>
        <input id="gz-edit-name" value="${nameVal}" placeholder="Tu nombre" class="form-control bg-dark text-white border-secondary" style="border-radius: 8px;">
      </div>
      <div class="form-group mb-3">
        <label class="small text-muted font-weight-bold mb-1">Apellidos</label>
        <input id="gz-edit-lastname" value="${lastnameVal}" placeholder="Tus apellidos" class="form-control bg-dark text-white border-secondary" style="border-radius: 8px;">
      </div>
      <div class="form-group mb-3">
        <label class="small text-muted font-weight-bold mb-1">Fecha de Nacimiento</label>
        <input id="gz-edit-birthday" type="date" value="${birthdayVal}" class="form-control bg-dark text-white border-secondary" style="border-radius: 8px;">
      </div>
      <div class="form-group mb-0">
        <label class="small text-muted font-weight-bold mb-1">Correo Electrónico (No editable)</label>
        <input value="${user?.email || ''}" disabled class="form-control bg-dark text-muted border-secondary opacity-75" style="border-radius: 8px;">
      </div>
    </div>
  `;

  return await swalWithBasicOptions('Editar Datos Personales', html).fire({
    confirmButtonText: 'Guardar Cambios',
    preConfirm: () => {
      const name = (document.getElementById('gz-edit-name') as HTMLInputElement)?.value?.trim();
      const lastname = (document.getElementById('gz-edit-lastname') as HTMLInputElement)?.value?.trim();
      const birthday = (document.getElementById('gz-edit-birthday') as HTMLInputElement)?.value;

      if (!name) {
        Swal.showValidationMessage('El nombre no puede estar vacío');
        return false;
      }
      if (!lastname) {
        Swal.showValidationMessage('El apellido no puede estar vacío');
        return false;
      }

      let formattedBirthday = '';
      if (birthday) {
        formattedBirthday = birthday;
      } else if (user?.birthday) {
        formattedBirthday = user.birthday.substring(0, 10);
      } else {
        formattedBirthday = '2000-01-01';
      }

      return {
        name,
        lastname,
        birthday: formattedBirthday,
      };
    },
  });
}

