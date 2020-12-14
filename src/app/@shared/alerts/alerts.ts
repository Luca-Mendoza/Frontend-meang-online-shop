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
export function infoDetailsBasic(title: string, html: string, width) {
    return Swal.fire({
        title,
        text: html,
        width: `${width}px`
    });
}
