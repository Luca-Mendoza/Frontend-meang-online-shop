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
  corruncySelect = CURRENCIES_SYMBOL[CURRENCY_LIST.US_DOLLAR];
  constructor() {}

  ngOnInit(): void {}
}
