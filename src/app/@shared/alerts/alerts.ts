import Swal from 'sweetalert2';

// tslint:disable-next-line:typedef
export async function fromBasicDialog(title: string, html: string, property: string) {
    const { value: formValues } = await Swal.fire({
        title,
        html,
        focusConfirm: false,
        cancelButtonText: 'Cancelar',
        showCancelButton: true,
        preConfirm: () => {
            return [
                ((document.getElementById('name')) as HTMLInputElement).value,
            ];
        }
    });

    if (formValues) {
        Swal.fire(JSON.stringify(formValues));
    }
}
