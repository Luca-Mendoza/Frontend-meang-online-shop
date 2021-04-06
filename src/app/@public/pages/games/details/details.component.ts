import { CartService } from '@shop/core/services/cart.service.ts.service';
import { ProductsService } from '@core/services/products.service';
import { CURRENCY_SELECT } from '@core/constants/config';

import { Component, OnInit } from '@angular/core';
import { IProduct } from '@mugan86/ng-shop-ui/lib/interfaces/product.interface';
import { ActivatedRoute } from '@angular/router';
import { loadData, closeAlert } from '@shared/alerts/alerts';
import { ICart } from '@shop/core/components/shopping-cart/shopping-cart.interface';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  product: IProduct;
  // Función  aleatoria para que recorra el total de la lista
  // products = products[Math.floor(Math.random() * products.length)];
  selectImage: string;
  currencySelect = CURRENCY_SELECT;
  screens = [];
  relationalProducts: Array<object> = [];
  randomItems: Array<IProduct> = [];
  loading: boolean;

  constructor(
    private productService: ProductsService,
    private activatedRouter: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    // consumir los detallles del producto por item
    this.activatedRouter.params.subscribe((params) => {
      console.log('parametros detalles', +params.id);
      this.loading = true;
      loadData('Cargando datos', 'Espera mientra carga la información');
      this.loadDataValue(+params.id);
    });
    this.cartService.itemsVar$.subscribe((data: ICart) => {
      if (data.subtotal === 0) {
        this.product.qty = 1;
        return;
      }
      this.product.qty = this.findProduct(+this.product.id).qty;
    });
  }
  findProduct(id: number) {
    return this.cartService.cart.products.find((item) => +item.id === id);
  }

  loadDataValue(id: number) {
    this.productService.getDetailsProduct(id).subscribe((result) => {

      this.product = result.product;
      const saveProductInCart = this.findProduct(+this.product.id);
      this.product.qty = (saveProductInCart !== undefined) ? saveProductInCart.qty : this.product.qty;
      this.selectImage = this.product.img;
      this.screens = result.screens;
      this.relationalProducts = result.relational;
      this.randomItems = result.random;

      this.loading = false;
      closeAlert();
    });
  }

  changeValue(qty: number) {
    console.log(qty);
    this.product.qty = qty;
  }

  selectOtherPlatform($event) {
    console.log($event.target.value);
    this.loadDataValue(+$event.target.value);
  }
  selectImgMain(i: number) {
    this.selectImage = this.screens[i];
  }

  addToCart() {
    this.cartService.manageProduct(this.product);
  }
}
