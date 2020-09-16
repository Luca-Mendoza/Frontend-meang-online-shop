import { Component, } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  toggledValue = true;

  // evento que viene desde el admin-header

  toggled($event) {
    // console.log('admin', $event);
    this.toggledValue = $event;
  }


}
