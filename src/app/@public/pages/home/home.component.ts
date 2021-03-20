import { IProduct } from '@mugan86/ng-shop-ui/lib/interfaces/product.interface';
import { ProductsService } from '@core/services/products.service';
import { Component, OnInit } from '@angular/core';
import { ICarouselItem } from '@mugan86/ng-shop-ui/lib/interfaces/carousel-item.interface';
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
      .shopProductsPlatforms(1, 4, ACTIVE_FILTERS.ACTIVE, true, ['4'])
      .subscribe((data) => {
        this.listOne = data.result;
      });
    // Producto mas economicos $35 y que tengamos en stock -40
    this.product
      .getByLastUnitsOffers(1, 4, ACTIVE_FILTERS.ACTIVE, true, 35, 40)
      .subscribe((data) => {
        this.listTwo = data.result;
      });
    // productos ps4
    this.product
      .shopProductsPlatforms(1, 4, ACTIVE_FILTERS.ACTIVE, true, ['18'])
      .subscribe((data) => {
        this.listThree = data.result;
      });
    // Producto que van en el carousel
    this.product
      .getByLastUnitsOffers(1, 4, ACTIVE_FILTERS.ACTIVE, true, -1, 20)
      .subscribe((data) => {
        data.result.map((item: IProduct) => {
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
