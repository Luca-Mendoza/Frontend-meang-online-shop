import { IProduct } from '@mugan86/ng-shop-ui/lib/interfaces/product.interface';
import { ProductsService } from '@core/services/products.service';
import { Component, OnInit } from '@angular/core';
import { ICarouselItem } from '@mugan86/ng-shop-ui/lib/interfaces/carousel-item.interface';
import { ACTIVE_FILTERS } from '@core/constants/filter';
import { loadData, closeAlert } from '@shared/alerts/alerts';

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
    loadData('title', 'html');
    this.product.getHomePage().subscribe((data) => {
      console.log(data);
      this.listOne = data.pc;
      this.listTwo = data.topPrice35;
      this.listThree = data.ps4;
      this.items = this.manageCarousel(data.carousel);
      closeAlert();
    });
  }
  private manageCarousel(list) {
    const itemsValues: Array<ICarouselItem> = [];
    list.shopProducts.map((item) => {
      itemsValues.push({
        id: item.id,
        title: item.product.name,
        description: item.platform.name,
        background: item.product.img,
        url: '',
      });
    });
    return itemsValues;
  }
}
