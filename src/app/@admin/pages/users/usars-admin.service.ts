import { Injectable } from '@angular/core';
import { UsersService } from '../../../@core/services/users.service';
import { IRegisterForm } from '../../../@core/interfaces/register.interface';

@Injectable({
  providedIn: 'root',
})
export class UsarsAdminService {
  constructor(private usersService: UsersService) {}

  register(user: IRegisterForm) {
    return this.usersService.register(user);
  }
}
