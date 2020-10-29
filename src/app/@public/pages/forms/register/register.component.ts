import { Component, OnInit, NgModule } from '@angular/core';
import { IRefisterForm } from '@core/interfaces/register.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  register: IRefisterForm = {
    name: '',
    lastname: '',
    email: '',
    birthday: '',
    password: '',

  };
  constructor() { }

  ngOnInit(): void {

    const data = new Date();
    data.setFullYear(data.getFullYear() - 18);
    this.register.birthday = (data.toISOString()).substring(0, 10);
    console.log(this.register);
  }

  private formatNumbers(num: number | string) {
    return (+num < 10) ? `0${num}` : num;
  }

  dataAsign($event) {
    console.log('Cogiendo datos', $event);
    const fecha = `${$event.year}-${this.formatNumbers($event.month)}-${this.formatNumbers($event.day)}`;
    this.register.birthday = fecha;
  }

  add() {
    console.log('Enviando datos', this.register);
  }

}
