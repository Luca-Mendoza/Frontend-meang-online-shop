import Swal from 'sweetalert2';

// tslint:disable-next-line:typedef
export async function fromBasicDialog(title: string, html: string, property: string) {
    return await Swal.fire({
        title,
        html,
        focusConfirm: false,
        cancelButtonText: 'Cancelar',
        showCancelButton: true,
        preConfirm: () => {
            const value = (document.getElementById('name') as HTMLInputElement).value;
            if (value) {
                return value;
            }
            Swal.showValidationMessage('Tiene que añadir un género para poder almacenarlo');
            return;
        }
    });

}

// tslint:disable-next-line:typedef
export function infoDetailsBasic(title: string, html: string, width: number | string) {
    return Swal.fire({
        title,
        text: html,
        width: `${width}px`,
        showCancelButton: true,
        confirmButtonColor: '#6C757D',
        cancelButtonColor: '#dc3545',
        confirmButtonText: '<i class="fas fa-edit"></i> Editar',
        cancelButtonText: '<i class="fas fa-lock"></i> Block',

    }).then((result) => {
        console.log(result);
        if (result.value) {
            console.log('Editar');
        } else if (result.dismiss.toString() === 'cancel'){
            console.log('Bloquear');
        }
    });
}

