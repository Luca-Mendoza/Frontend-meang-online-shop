import { Component, OnInit, NgModule } from '@angular/core';
import { IRegisterForm } from '@core/interfaces/register.interface';
import { ApiService } from '@graphql/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  register: IRegisterForm = {
    name: '',
    lastname: '',
    email: '',
    birthday: '',
    password: '',

  };
  constructor( private api:ApiService) { }

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
    this.api.register(this.register).subscribe((result) => {
      console.log('Result', result);
    });
  }

}
