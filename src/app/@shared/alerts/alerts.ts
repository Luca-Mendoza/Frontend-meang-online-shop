import Swal from 'sweetalert2';

// tslint:disable-next-line:typedef
// Aplicando swal.mixin = para reutilizar codigo de la alert
const swalWithBasicOptions = (title: string, html: string) => Swal.mixin({
  title,
  html,
  focusConfirm: false,
  cancelButtonText: 'Cancelar',
  showCancelButton: true,
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
export async function userFormBasicDialog(
  title: string,
  html: string
) {
  return await swalWithBasicOptions(title, html).fire({
    preConfirm: () => {
      let error = '';
      const name = (document.getElementById('name') as HTMLInputElement)?.value;
      if (!name) {
        error += 'Usuario es obligatorio<br/>';
      }
      const lastname = (document.getElementById('lastname') as HTMLInputElement)?.value;
      if (!lastname) {
        error += 'Apellido es obligatorio<br/>';
      }
      const email = (document.getElementById('email') as HTMLInputElement)?.value;
      if (!email) {
        error += 'Email es obligatorio<br/>';
      }
      const role = (document.getElementById('role') as HTMLInputElement)?.value;
      if (error !== '') {
        Swal.showValidationMessage(
          error
        );
        return;
      }
      return {
        name,
        lastname,
        email,
        role,
        birthday: new Date().toISOString()
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
    confirmButtonColor: '#6C757D',
    cancelButtonColor: '#dc3545',
    confirmButtonText,
    cancelButtonText,
  }).then((result) => {
    console.log(result);
    if (result.value) {
      return true;
    } else if (result.dismiss.toString() === 'cancel') {
      return false;
    }
  });
}
