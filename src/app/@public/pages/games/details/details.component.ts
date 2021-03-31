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
  constructor(
    private productService: ProductsService,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // consumir los detallles del producto por item
    this.activeRouting();
  }

  private  activeRouting(){
    // tslint:disable-next-line: deprecation
    this.activatedRouter.params.subscribe((params) => {
      console.log('parametros detalles', +params.id);
      this.productService.getDetailsProduct(+params.id).subscribe((result) => {
        console.log(result);
        this.product = result.product;
        this.selectImage = this.product.img;
        this.screens = result.screens;
        this.relationalProducts = result.relational;
      });
    });
  }

  changeValue(qty: number) {
    console.log(qty);
  }

  selectImgMain(i) {
    this.selectImage = this.screens[i];
  }
}
