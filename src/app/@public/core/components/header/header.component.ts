import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMenuItem } from '@core/interfaces/menu.interface';
import { IMeData } from '@core/interfaces/session.interface';
import { AuthService } from '@core/services/auth.service';
import shopMenuItems from '@data/menus/shop.json';
import { CartService } from '@shop/core/services/cart.service.ts.service';
import { ICart } from '@shop/core/components/shopping-cart/shopping-cart.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cartItemsTotal: number = 0;
  menuItems: Array<IMenuItem> = shopMenuItems;
  session: IMeData = {
    status: false,
  };
  access = false;
  role: string;
  userLabel = '';

  constructor(
    private authService: AuthService,
    private cartService: CartService,
    private router: Router
  ) {
    this.authService.accessVar$.subscribe((result) => {
      this.session = result;
      this.access = this.session.status;
      this.role = this.session.user?.role;
      this.userLabel = `${this.session.user?.name} ${this.session.user?.lastname}`;
    });
    this.cartService.itemsVar$.subscribe((data: ICart) => {
      if (data !== undefined && data !== null) {
        this.cartItemsTotal = data.subtotal;
      }
    });
  }

  ngOnInit(): void {
    const cart = this.cartService.initialize();
    if (cart) {
      this.cartItemsTotal = cart.subtotal;
    }
  }

  openCart() {
    this.cartService.open();
  }

  onSearch(searchQuery: string) {
    if (searchQuery && searchQuery.trim().length > 0) {
      this.router.navigate(['/games'], {
        queryParams: { search: searchQuery.trim() },
      });
    }
  }

  onPlatformSelect(url: string) {
    if (url && url !== 'ALL') {
      this.router.navigateByUrl(url);
    }
  }

  async logout() {
    this.authService.resetSession(this.router.url);
  }
}
