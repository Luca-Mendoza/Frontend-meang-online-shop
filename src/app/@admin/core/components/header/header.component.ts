import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  // evaluando que la informacion empieze en true por defecto
  toggledValue = true;
  // enviando informacion al padre para ocultar la barra lateral del menu Admin
  @Output() newItemEvent = new EventEmitter<boolean>();

  // la funcion toggles haces las evaluaciones de que estado esta el Buttom (True / False)
  toggled() {
    if (this.toggledValue === undefined) {
      this.toggledValue = true;
    }
    this.toggledValue = !this.toggledValue;
    this.newItemEvent.emit(this.toggledValue);
  }

}
