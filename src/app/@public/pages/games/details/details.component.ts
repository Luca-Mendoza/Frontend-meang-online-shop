import { ProductsService } from '@core/services/products.service';
import { Component, OnInit } from '@angular/core';
import products from '@data/products.json';
import { CURRENCIES_SYMBOL, CURRENCY_LIST } from '@mugan86/ng-shop-ui';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  // Función  aleatoria para que recorra el total de la lista
  products = products[Math.floor(Math.random() * products.length)];
  selectImage = this.products.img;
  currencySelect = CURRENCIES_SYMBOL[CURRENCY_LIST.US_DOLLAR];
  screens = [
    'https://media.rawg.io/media/screenshots/168/16840899b589ffde76915c3d95417b31.jpg',
    'https://media.rawg.io/media/screenshots/19a/19a0b30963cb2014db5780d3a7e0f8e5.jpg',
    'https://media.rawg.io/media/screenshots/b30/b3002dfb4b2a82365345cc75e6b7c944.jpg',
    'https://media.rawg.io/media/screenshots/24f/24f9be7c639ad371f05cde32418220ec.jpg',
    'https://media.rawg.io/media/screenshots/c01/c01b93973fa36c841c18781afffe912e.jpg',
    'https://media.rawg.io/media/screenshots/fc8/fc8ec9139f6e87cd796ed2f5241eed7c.jpg',
    'https://media.rawg.io/media/screenshots/d12/d1240e0f5b06523f1c8c64c6960a1457.jpg',
  ];
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.productService.getDetailsProduct(1).subscribe( result => {
      console.log(result);
    });
  }

  changeValue(qty: number) {
    console.log(qty);
  }

  selectImgMain(i) {
    this.selectImage = this.screens[i];
  }
}
