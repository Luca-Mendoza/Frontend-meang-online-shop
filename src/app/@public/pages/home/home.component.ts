import { IProduct } from '@mugan86/ng-shop-ui/lib/interfaces/product.interface';
import { ProductsService } from '@core/services/products.service';
import { Component, OnInit } from '@angular/core';
import { ICarouselItem } from '@mugan86/ng-shop-ui/lib/interfaces/carousel-item.interface';
import carouselItem from '@data/carousel.json';
import { ACTIVE_FILTERS } from '@core/constants/filter';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  items: ICarouselItem[] = [];
  productsList;
  listOne;
  listTwo;
  listThree;

  constructor(private product: ProductsService) {}

  ngOnInit(): void {
    // productos PC
    this.product
      .shopProductsPlatforms(1, 4, ACTIVE_FILTERS.ACTIVE, true, '4')
      .subscribe((result) => {
        this.listOne = result;
      });
    // Producto mas economicos $35 y que tengamos en stock -40
    this.product
      .getByLastUnitsOffers(1, 4, ACTIVE_FILTERS.ACTIVE, true, 35, 40)
      .subscribe((result) => {
        this.listTwo = result;
      });
    // productos ps4
    this.product
      .shopProductsPlatforms(1, 4, ACTIVE_FILTERS.ACTIVE, true, '18')
      .subscribe((result) => {
        this.listThree = result;
      });
    // Producto que van en el carousel
    this.product
      .getByLastUnitsOffers(1, 4, ACTIVE_FILTERS.ACTIVE, true, -1, 20)
      .subscribe((result: IProduct[]) => {
        result.map((item: IProduct) => {
          this.items.push({
            id: item.id,
            title: item.name,
            description: item.description,
            background: item.img,
            url: '',
          });
        });
      });
  }
}
