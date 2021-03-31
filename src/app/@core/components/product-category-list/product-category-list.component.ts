import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { IProduct } from '@mugan86/ng-shop-ui/lib/interfaces/product.interface';

@Component({
  selector: 'app-product-category-list',
  templateUrl: './product-category-list.component.html',
  styleUrls: ['./product-category-list.component.scss'],
})
export class ProductCategoryListComponent {
  @Input() title = 'Titulo de la categoria';
  @Input() productsList: Array<IProduct> = [];
  @Input() description = '';
  constructor(private router: Router) {}

  addToCart($event: IProduct) {
    // Usar la información del producto pasado para llevarlo al carrito de compra
    console.log('Carrito', $event);
  }

  showProductDetails($event: IProduct) {
    console.log('Info', $event);
    this.router.navigate(['/games/details', +$event.id]);
  }
}
