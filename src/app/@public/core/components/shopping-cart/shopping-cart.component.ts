import { IProduct } from '@mugan86/ng-shop-ui/lib/interfaces/product.interface';
import { ICart } from './shopping-cart.interface';
import { Component, OnInit } from '@angular/core';
import { CartService } from '@shop/core/services/cart.service.ts.service';
import { CURRENCY_SELECT } from '@core/constants/config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  currencySelect = CURRENCY_SELECT;
  cart: ICart;
  constructor(private cartService: CartService, private router: Router) {
    this.cartService.itemsVar$.subscribe((data: ICart) => {
      if (data !== null && data !== undefined) {
        this.cart = data;
      }
    });
  }

  ngOnInit(): void {
    // Traemos la informacion que tenemos guardada en el localstorage

    this.cart = this.cartService.initialize();
  }
  proccess() {
    this.router.navigate(['checkout']);
    this.closeNav();
  }

  /** Limpiar carrito */
  clear() {
    this.cartService.clear();
  }
  clearItem(product: IProduct) {
    this.manageProductUnitInfo(0, product);
  }
  /*Agegamos valor al cart shop*/
  changeValue(qty: number, product: IProduct) {
    this.manageProductUnitInfo(qty, product);
  }
  /** Informacion del service que hay en el LocalStorage  */
  manageProductUnitInfo(qty: number, product: IProduct) {
    product.qty = qty;
    this.cartService.manageProduct(product);
  }
  closeNav() {
    this.cartService.close();
  }
}
