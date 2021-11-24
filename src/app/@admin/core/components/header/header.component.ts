import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { REDIRECTS_ROUTER } from '@core/constants/config';
import { IMeData } from '@core/interfaces/session.interface';
import { AuthService } from '@core/services/auth.service';
import { optionsWithDetails } from '@shared/alerts/alerts';

@Component({
  selector: 'app-admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // evaluando que la informacion empieze en true por defecto
  toggledValue = true;
  // enviando informacion al padre para ocultar la barra lateral del menu Admin
  @Output() toggleChange = new EventEmitter<boolean>();

  userLabel = '';

  constructor(private authService: AuthService, private router: Router) {
    this.authService.accessVar$.subscribe((result) => {
      if (!result.status) {
        this.router.navigate(['/']);
        return;
      }
      this.userLabel = `${result.user?.name} ${result.user?.lastname}`;
    });
  }

  ngOnInit(): void {
    this.authService.start();
  }

  // la funcion toggles haces las evaluaciones de que estado esta el Buttom (True / False)
  toggled() {
    if (this.toggledValue === undefined) {
      this.toggledValue = true;
    }
    this.toggledValue = !this.toggledValue;
    this.toggleChange.emit(this.toggledValue);
  }

  async logout() {
    this.authService.resetSession();
  }
}
