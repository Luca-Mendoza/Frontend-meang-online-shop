import Swal from 'sweetalert2';

// tslint:disable-next-line:typedef
// Aplicando swal.mixin = para reutilizar codigo de la alert
const swalWithBasicOptions = (title: string, html: string) => Swal.mixin({
  title,
  html,
  showCloseButton: true,
  focusConfirm: false,
  cancelButtonText: 'Cancelar',
  showCancelButton: true,
});



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

export async function userFromBasicDialog(
  title: string,
  html: string
) {
  return await swalWithBasicOptions(title, html).fire({
    preConfirm: () => {
      let error = '';
      const value = (document.getElementById('name') as HTMLInputElement).value;
      if (!value) {
        return error += 'Usuario es obligatorio';
      }
      if (error !== '') {
        Swal.showValidationMessage(
          error
        );
      }
      return;
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
