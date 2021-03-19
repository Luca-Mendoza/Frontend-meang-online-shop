import { Component, OnInit } from '@angular/core';
import { ACTIVE_FILTERS } from '@core/constants/filter';
import { ProductsService } from '@core/services/products.service';
import { IProduct } from '@mugan86/ng-shop-ui/lib/interfaces/product.interface';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  productsList: Array<IProduct> = [];
  constructor(private product: ProductsService) {}

  ngOnInit(): void {
    // productos PC
    this.product
      .shopProductsPlatforms(5, 20, ACTIVE_FILTERS.ACTIVE, false, '4')
      .subscribe((result) => {
        this.productsList = result;
      });
  }
}
