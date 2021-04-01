import { ICart } from './../components/shopping-cart/shopping-cart.interface';
import { IProduct } from '@mugan86/ng-shop-ui/lib/interfaces/product.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  products: Array<IProduct> = [];
  cart: ICart = {
    products: this.products,
    total: 0,
    subtotal: 0,
  };
  constructor() {}

  /**
   * Inicializar el carrito de compra para tener la información almacenada
   */
  initialize() {
    const storeData = JSON.parse(localStorage.getItem('cart'));
    if (storeData !== null) {
      this.cart = storeData;
    }
    return this.cart;
  }

  manageProduct(product: IProduct) {
    // Obtener cantidad de productos en el carrito
    const productTotal = this.cart.products.length;
    // Comprobamos si tenemos productos
    if (productTotal === 0) {
      console.log('Añadiendo primer producto');
      this.cart.products.push(product);
    } else {
      // Si tenemos productos hacer lo siguiente
      let actionUpdateOk = false;
      for (let i = 0; i < productTotal; i++) {
        // Comprobar que coincide el producto con alguno de la lista
        if (product.id === this.cart.products[i].id) {
          console.log('Producto existente y vamos a gestionarlo');
          if (product.qty === 0) {
            console.log('Borrar item seleccionado');
            // Quitar elemento
            this.cart.products.slice(i, 1);
          } else {
            // Actualizar con la nueva información
            this.cart.products[i] = product;
          }
          actionUpdateOk = true;
          i = productTotal;
        }
      }
      if (!actionUpdateOk) {
        this.cart.products.push(product);
      }
    }
    this.checkoutTotal();
  }

  checkoutTotal() {
    let subtotal = 0;
    let total = 0;
    this.cart.products.map((product: IProduct) => {
      subtotal += product.qty; // subtotal = total + product.qty
      total += product.qty * product.price; // total = Multiplicamos la cantidad de producto por su precio
    });
    this.cart.total = total;
    this.cart.subtotal = subtotal;
    console.log(this.cart, 'calcular');
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
  open() {
    console.log('openNav');
    document.getElementById('mySidenav').style.width = '350px';
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('app').style.overflow = 'hidden';
  }

  close() {
    console.log('closeNav');
    document.getElementById('mySidenav').style.width = '0';
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('app').style.overflow = 'auto';
  }
}
