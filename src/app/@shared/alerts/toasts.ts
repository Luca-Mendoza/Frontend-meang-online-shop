import { TYPE_ALERT } from './values.config';
import Swal from 'sweetalert2';



// tslint:disable-next-line: typedef
export function basicAlert( icon = TYPE_ALERT.SUCCESS, title: string = '') {
    Swal.fire({
        title,
        icon ,
        position: 'top',
        showConfirmButton: false,
        toast: true,
        timer: 4000,
        timerProgressBar: true,
    });
}
