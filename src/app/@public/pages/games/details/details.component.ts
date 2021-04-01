import { ProductsService } from '@core/services/products.service';
import { Component, OnInit } from '@angular/core';
import products from '@data/products.json';
import { CURRENCIES_SYMBOL, CURRENCY_LIST } from '@mugan86/ng-shop-ui';
import { IProduct } from '@mugan86/ng-shop-ui/lib/interfaces/product.interface';
import { timeStamp } from 'console';
import { ActivatedRoute } from '@angular/router';
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
  currencySelect = CURRENCIES_SYMBOL[CURRENCY_LIST.US_DOLLAR];
  screens = [];
  relationalProducts: Array<object> = [];
  randomItems: Array<IProduct> = [];

  constructor(
    private productService: ProductsService,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // consumir los detallles del producto por item
    this.activatedRouter.params.subscribe((params) => {
      console.log('parametros detalles', +params.id);
      this.loadDataValue(+params.id);
    });
  }

  loadDataValue(id: number) {
    this.productService.getDetailsProduct(id).subscribe((result) => {
      console.log(result);
      this.product = result.product;
      this.selectImage = this.product.img;
      this.screens = result.screens;
      this.relationalProducts = result.relational;
      this.randomItems = result.random;
    });
  }

  changeValue(qty: number) {
    console.log(qty);
  }

  selectOtherPlatform($event) {
    console.log($event.target.value);
    this.loadDataValue(+$event.target.value);
  }
  selectImgMain(i: number) {
    this.selectImage = this.screens[i];
  }
}
