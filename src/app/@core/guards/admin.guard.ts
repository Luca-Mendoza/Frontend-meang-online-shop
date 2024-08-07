import { AuthService } from '@core/services/auth.service';
import { Injectable } from '@angular/core';
import {
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

const jwtDecode = require('jwt-decode');
@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivateChild {
  constructor(private auth: AuthService, private router: Router) {}

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // Primero comprobar que existe sesión
    if (this.auth.getSession() !== null) {
      const dataDecode = this.decodeToken();
      // console.log(dataDecode);
      // Comprobar que no está caducado el token
      if (dataDecode.exp < new Date().getTime() / 1000) {
        return this.redirect();
      }
      // El role del usuario es ADMIN
      if (dataDecode.user.role === 'ADMIN') {
        return true;
      }
    }
    return this.redirect();
  }

  // tslint:disable-next-line:typedef
  redirect() {
    this.router.navigate(['/login']);
    return false;
  }

  // tslint:disable-next-line:typedef
  decodeToken() {
    return jwtDecode(this.auth.getSession().token);
  }
}
