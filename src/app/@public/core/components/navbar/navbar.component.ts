import { CartService } from './../../services/cart.service.ts.service';
import { Component, OnInit } from '@angular/core';
import { IMeData } from '@core/interfaces/session.interface';
import { IMenuItem } from '@core/interfaces/menu.interface';

import { AuthService } from '@core/services/auth.service';
import shopMenuItems from '@data/menus/shop.json';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  menuItems: Array<IMenuItem> = shopMenuItems;
  session: IMeData = {
    status: false,
  };
  access = false;
  role: string;
  userLabel = '';

  constructor(private authService: AuthService, private cartService: CartService) {
    this.authService.accessVar$.subscribe((result) => {
      console.log(result.status);
      this.session = result;
      this.access = this.session.status;
      this.role = this.session.user?.role;
      this.userLabel = `${this.session.user?.name} ${this.session.user?.lastname}`;
    });
  }

  ngOnInit(): void {}

  open(){
    console.log('Navbar Open Cart');
    this.cartService.open();
  }

  logout() {
    this.authService.resetSession();
  }
}
